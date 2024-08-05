import React from "react";
import styled from "styled-components";

/**
 *
 * @param {
 *  {
 *    type: String,
 *    name: String,
 *    value: String | Number,
 *    onChange: Function,
 *    label: String,
 *    errorMessage: String,
 *    icon: {
 *      name: String,
 *      color: String,
 *      size: Number
 *    },
 *    style: {},
 *    inputContainerStyle: {}
 *    height: Number,
 *    extraOptions: {}
 *  }
 * }
 * @returns
 */

const Label = styled.label`
  display: flex;
  align-items: center;
  backgroundcolor: #fff;
  position: relative;
`;
const InputForm = styled.input`
  padding: 8px;
`;
const IconContainer = styled.span`
  position: absolute;
  left: -1px;
`;

function Input({
  type,
  value = "",
  onChange,
  label,
  errorMessage,
  icon,
  extraOptions,
  name,
  className,
  style,
}) {
  return (
    <Label>
      <IconContainer>
        {icon && (
          <icon.name
            color={icon?.color ?? "gray"}
            style={{ marginLeft: 12 }}
            size={icon?.size ?? 20}
          />
        )}
      </IconContainer>
      <InputForm
        className={className}
        placeholder={label}
        type={type ?? "text"}
        value={value}
        style={style}
        onChange={(e) => onChange(e.target.value, name)}
        {...extraOptions}
      />
      {errorMessage && (
        <div style={{ marginTop: 10, fontSize: 13, color: "red" }}>
          Veuillez remplir toute les input
        </div>
      )}
    </Label>
  );
}

export default Input;
