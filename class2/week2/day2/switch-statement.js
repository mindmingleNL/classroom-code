// A switch statement is another way of writing an if-elseif-else condition
switch (kind) {
  case "cow":
    return "🐮";
  case "sheep":
    return "🐑";
  case "chicken":
    return "🐔";
  case "pig":
    return "🐷";
  default:
    return "";
}

if (kind === "cow") {
  return "🐮";
} else if (kind === "sheep") {
  return "🐑";
} else if (kind === "chicken") {
  return "🐔";
} else if (kind === "pig") {
  return "🐑";
} else {
  return "🐷";
}
