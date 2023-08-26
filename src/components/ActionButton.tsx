type ActionButtonProps = {
  variant: string;
  onClickAction?: () => void;
  actionText: string;
};

export default function ActionButton({
  variant,
  onClickAction,
  actionText,
}: ActionButtonProps) {
  return (
    <button
      className={`text-md rounded-md border-2 border-black px-5 py-2 ${
        variant === "contained"
          ? "bg-black text-white dark:bg-white dark:text-black"
          : "text-black dark:text-white"
      }`}
      onClick={onClickAction}
    >
      {actionText}
    </button>
  );
}
