import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import "../components/register/Register.scss";
import { useForm } from "react-hook-form";

interface FormProps {
  onSubmit: (data: RegisterUserData) => void;
}

export interface RegisterUserData {
  username: string;
  password: string;
  confirmedPassword: string;
}

function RegisterForm({ onSubmit }: FormProps) {
  const { control, handleSubmit, formState } = useForm<RegisterUserData>({
    mode: "onChange",
  });

  return (
    <>
      <div className="container">
        <div className="left-side-container">
          <p>Watch anywhere.</p>
          <p>Cancel anytime.</p>
        </div>
        <div className="right-side-container">
          <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <p>Create an account</p>
            <Controller
              name="username"
              control={control}
              rules={{
                required: { value: true, message: "Username is mandatory" },
                minLength: {
                  value: 5,
                  message: "Password must have at least 5 characters",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  className="input"
                  label="Username"
                  size="small"
                  name="username"
                  error={error !== undefined}
                  value={value}
                  onChange={onChange}
                  helperText={formState?.errors?.username?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: { value: true, message: "Password is mandatory" },
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  className="input"
                  label="Password"
                  size="small"
                  type="password"
                  name="password"
                  value={value}
                  onChange={onChange}
                  error={error !== undefined}
                  helperText={formState?.errors?.password?.message}
                />
              )}
            />
            <Controller
              name="confirmedPassword"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Confirmed password is mandatory",
                },
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  className="input"
                  label="Confirm password"
                  size="small"
                  type="password"
                  name="confirmedPassword"
                  value={value}
                  onChange={onChange}
                  error={error !== undefined}
                  helperText={formState?.errors?.confirmedPassword?.message}
                />
              )}
            />
            <Button variant="contained" type="submit">
              Register
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
