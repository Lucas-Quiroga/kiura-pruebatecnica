interface SuccessMessageProps {
  title: string;
  subtitle: string;
  message: string;
}

const SuccessMessage = ({ title, message, subtitle }: SuccessMessageProps) => {
  return (
    <div className="grid gap-4 w-full justify-items-center">
      <div className="grid gap-2 justify-items-center">
        <CheckCircle2Icon className="h-12 w-12 text-green-500" />
        <h3 className="text-2xl font-bold tracking-tighter">{title}</h3>
        <p className="text-center w-full max-w-[600px] text-gray-500">
          {subtitle}
        </p>
      </div>
      <div className="grid gap-2 justify-items-center">
        <CheckIcon className="h-8 w-8 text-green-500" />
        <p className="text-sm text-gray-500">{message}</p>
      </div>
    </div>
  );
};

export default SuccessMessage;

function CheckCircle2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
