import { Button, TextField } from "@mui/material";
import "../components/login/Login.scss";
import { Controller, useForm } from "react-hook-form";

interface FormProps {
  onSubmit: (data: LoginUserData) => void;
}

export interface LoginUserData {
  username: string;
  password: string;
}

function LoginForm({ onSubmit }: FormProps) {
  const { control, handleSubmit, formState } = useForm<LoginUserData>({
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
            <Controller
              name="username"
              control={control}
              rules={{
                required: { value: true, message: "Username is mandatory" },
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
                minLength: 8,
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
            <Button variant="contained" type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
