interface ErrorMessageProps {
  message: string | undefined;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  if (props.message) {
    return <p className="error-msg">⚠️ {props.message}</p>;
  } else {
    return <p className="error-msg">⚠️ Something went wrong</p>;
  }
};

export default ErrorMessage;
