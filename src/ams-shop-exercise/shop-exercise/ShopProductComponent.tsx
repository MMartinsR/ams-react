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
import { useCart } from "../shopCartContext";

export interface ShopProductComponent {
  id: number;
  title?: string;
  description?: string;
  price?: number;
  reviews?: ProductReview[];
  thumbnail?: string;
}

interface ProductReview {
  comment: string;
  reviewerEmail: string;
  reviewerName: string;
}

export const ShopProductComponent = ({
  id,
  title,
  reviews,
  description,
  price,
  thumbnail
}: ShopProductComponent) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      reviews,
      description,
      price,
      thumbnail
    });
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Center>
          <Image src={thumbnail} h={300} w={300} />
        </Center>
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Text fw={500}>$ {price}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Card.Section p={"lg"}>
        <Text size="lg" c="dimmed">
          Reviews
        </Text>
        <Space h={"lg"} />
        {reviews?.map((review, index) => (
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

      <Button color="blue" mt="md" radius="md" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </Card>
  );
};
