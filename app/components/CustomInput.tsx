import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authFormSchema } from "@/lib/utils";
import React from "react";
import { Control, Controller, FieldPath } from "react-hook-form";
import { Form } from "react-hook-form";
import z from "zod";

const formSchema = authFormSchema("sign-up");

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  type: string;
  placeholder: string;
}

const CustomInput = ({
  control,
  name,
  label,
  type,
  placeholder,
}: CustomInput) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <div className="form-item">
            <FieldLabel htmlFor="form-rhf-demo-email">{label}</FieldLabel>
            <div className="flex w-full flex-col">
              <Input
                {...field}
                id="form-rhf-demo-title"
                aria-invalid={fieldState.invalid}
                placeholder={placeholder}
                type={type}
                // autoComplete="off"
                className="input-class"
              />
            </div>
            {fieldState.invalid && (
              <FieldError
                className=" text-red-600 mt-2 font-semibold"
                errors={[fieldState.error]}
              />
            )}
          </div>
        </Field>
      )}
    />
  );
};

export default CustomInput;
