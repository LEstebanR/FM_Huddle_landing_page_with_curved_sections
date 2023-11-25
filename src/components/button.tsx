import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  color?: "primary" | "white" | "gray";
  className?: string;
  size?: "small" | "medium" | "large" | "full";
}

const sizeStyles = {
  small: "w-20 h-6 text-xs md:w-32 md:h-10",
  medium: "w-32",
  large: "w-52 h-10",
  full: "w-full",
};

const variantStyles = {
  solid: {
    primary:
      "bg-primary text-white text-extrabold text-Headers drop-shadow-xl shadow-buttonSolid hover:bg-active hover:text-white",
  },
  outline: {
    primary:
      "border border-primary text-primary drop-shadow-xl shadow-buttonOutline hover:border-active hover:text-active",
  },
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  color = "primary",
  size = "small",
  className,
  ...props
}) => {
  const mergedClassName = clsx(
    "rounded-full font-body ",
    (variantStyles[variant] as { [key: string]: string })[color],
    sizeStyles[size],
    className
  );
  return (
    <button className={mergedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
