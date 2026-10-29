import { useCart } from "../shopCartContext";
import {
  Button,
  Card,
  Center,
  Container,
  Divider,
  Group,
  Image,
  SimpleGrid,
  Space,
  Text
} from "@mantine/core";

export function ShopCartList() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <Container>
      {cartItems?.map((product) => (
        <Card key={product.id} shadow="sm" padding="md" radius="xs" withBorder>
          <Card.Section>
            <Center>
              <Image src={product.thumbnail} h={100} w={100} />
            </Center>
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{product.title}</Text>
            <Text fw={500}>$ {product.price}</Text>
          </Group>

          <Text size="sm" c="dimmed">
            {product.description}
          </Text>

          <Card.Section p={"lg"}>
            <Text size="lg" c="dimmed">
              Reviews
            </Text>
            <Space h={"lg"} />
            {product.reviews?.map((review, index) => (
              <Container key={index}>
                <SimpleGrid>
                  <Text>{review.comment}</Text>
                  <Text size={"xs"}>{review.reviewerName}</Text>
                  <Text size={"xs"}>{review.reviewerEmail}</Text>
                </SimpleGrid>
                <Space h={"lg"} />
                <Divider />
                <Space h={"lg"} />
              </Container>
            ))}
          </Card.Section>

          <Button
            color="blue"
            mt="md"
            radius="md"
            onClick={() => removeFromCart(product.id)}
          >
            Remove
          </Button>
        </Card>
      ))}
    </Container>
  );
}
