from typing import Annotated
from fastapi import Depends, FastAPI, HTTPException
from enum import Enum
from pydantic import BaseModel
import uvicorn
from fastapi.security import OAuth2PasswordBearer


# DATA MODEL
class PetKind(str, Enum):
    dog = "dog"
    cat = "cat"
    bird = "bird"


class PetBase(BaseModel):
    name: str
    kind: PetKind
    happy: bool


class PetIn(PetBase):
    pass


class PetDb(PetBase):
    id: int
    owner_id: int | None = None


class PetOut(PetDb):
    id: int
    owner_id: int | None = None


# see https://fastapi.tiangolo.com/tutorial/extra-models/#reduce-duplication
class OwnerBase(BaseModel):
    name: str


class OwnerIn(OwnerBase):
    password: str


class OwnerOut(OwnerBase):
    id: int


class OwnerDb(OwnerBase):
    id: int
    password: str


# FAKE DB


class FakeDatabase:

    pet_table: list[PetDb] = [
        PetDb(id=1, name="Scooby Doo", kind=PetKind.dog, owner_id=1, happy=True),
        PetDb(id=2, name="Pluto", kind=PetKind.dog, owner_id=2, happy=True),
        PetDb(id=3, name="Tom", kind=PetKind.cat, owner_id=1, happy=True),
        PetDb(id=4, name="Garfield", kind=PetKind.cat, owner_id=None, happy=True),
        PetDb(id=5, name="Pino", kind=PetKind.bird, owner_id=3, happy=True),
        PetDb(id=6, name="Tweety", kind=PetKind.bird, owner_id=None, happy=True),
    ]

    owner_table: list[OwnerDb] = [
        OwnerDb(id=1, name="Alice", password="a1234"),
        OwnerDb(id=2, name="Bob", password="b1234"),
        OwnerDb(id=3, name="Jane", password="j1234"),
    ]

    def getPetById(self, id: int):
        for pet in self.pet_table:
            if pet.id == id:
                return pet
        return None

    def createPet(self, pet_data: PetIn, owner_id: int):
        max_id = max([p.id for p in self.pet_table])
        new_pet = PetDb(id=max_id + 1, owner_id=owner_id, **pet_data.model_dump())
        self.pet_table.append(new_pet)
        return new_pet


db = FakeDatabase()


# SERVER

app = FastAPI()


## UTILS


def decode_token_fake(token: str) -> OwnerDb | None:
    for owner in db.owner_table:
        if owner.name == token:
            return owner

    return None


## DEPS

oauth2bearer = OAuth2PasswordBearer(tokenUrl="token")


def get_current_user(token: Annotated[str, Depends(oauth2bearer)]):
    authorized_owner = decode_token_fake(token)
    if not authorized_owner:
        raise HTTPException(status_code=401)
    return authorized_owner


def has_greeting(greeting: str = "hallo"):
    print(greeting)
    return greeting


## PET ROUTES


@app.get("/pets")
async def read_pets(
    owner: Annotated[OwnerDb, Depends(get_current_user)]
) -> list[PetDb]:
    return db.pet_table


@app.get("/pets/{pet_id}", responses={404: {"detail": "Pet not found"}})
async def read_pet(pet_id: int) -> PetDb:
    target_pet = db.getPetById(pet_id)
    if not target_pet:
        raise HTTPException(status_code=404, detail="Pet not found")
    return target_pet


@app.post("/pets")
async def create_pet(
    pet: PetIn, owner: Annotated[OwnerDb, Depends(get_current_user)]
) -> PetDb:
    return db.createPet(pet, owner_id=owner.id)


if __name__ == "__main__":
    uvicorn.run(
        app="__main__:app", host="0.0.0.0", port=3000, log_level="info", reload=True
    )
