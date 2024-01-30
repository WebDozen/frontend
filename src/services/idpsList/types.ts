import type { TypeIDP } from "../idp/types";

export type TypeIDPState = {
  idpsList: TypeIDP[];
  loading: boolean;
  error: string | null;
};
