import { Outlet, useNavigate } from "react-router";
import { ActionIcon, Flex } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";

export function ShopFrame() {
  const navigate = useNavigate();

  const navigateToShoppingCart = () => {
    navigate("/shopping-cart");
  };

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        mb="md"
        mt="xs"
        ms="xs"
        me="xs"
      >
        <ActionIcon
          size="lg"
          variant="filled"
          onClick={navigateToHome}
          aria-label="Home"
        >
          <IconHome size={20} />
        </ActionIcon>

        <button onClick={navigateToShoppingCart}>Shopping Cart</button>
      </Flex>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
