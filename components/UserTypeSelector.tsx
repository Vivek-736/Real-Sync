import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

const UserTypeSelector = ({
  userType,
  setUserType,
  onClickHandler,
}: UserTypeSelectorParams) => {
  const accessChangeHandler = (type: UserType) => {
    setUserType(type);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onClickHandler && onClickHandler(type);
  };
  return (
    <Select
      value={userType}
      onValueChange={(type: UserType) => accessChangeHandler(type)}
    >
      <SelectTrigger className="w-fit border-none bg-transparent text-blue-100">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border-none bg-gray-800">
        <SelectItem value="view">can view</SelectItem>
        <SelectItem value="editor">can edit</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default UserTypeSelector;
