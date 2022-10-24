export type HeaderInfoType = {
  data: portfolioType;
  trending: Array<Object>;
  RenderItem: any;
  navigate: () => void;
};

type portfolioType = {
  portfolio: {
    balance: string;
    changes: string;
  };
};
