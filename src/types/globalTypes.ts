// this file is for global types of project

// variable types
export type emailType = {
  avatar: string;
  name: string;
  des: string;
  date: string;
};

export type cardType = {
  title: string;
  des: string;
  icon: string;
};

export type todoType = {
  title: string;
  date: string;
  icon: string;
};

export type personType = {
  name: string;
  id: string;
  icon: string;
  checked: "true" | "false";
};

// function types
export type voidFunc = () => void;
