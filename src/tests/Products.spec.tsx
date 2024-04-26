import { render, act} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Products } from "../components/Products";
import "@testing-library/jest-dom";

describe("Header, Cart, and Products components", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
  });

  it("Products should render correctly", async () => {
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <Products />
        </QueryClientProvider>
      );
    });
  });
});
