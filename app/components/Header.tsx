import { Header, Burger, Box, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function HeaderAction() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Box>
      <Header height={60}>
        <Burger opened={opened} onClick={toggle} size="sm" />
        <h1 style={{ color: "white", display: "inline" }}>👈 Open here</h1>
      </Header>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title={
          <h1 style={{ color: "white" }}>
            ❎ will be 👉 during dev mode and 👇 during build
          </h1>
        }
        zIndex={1000000}
      />
    </Box>
  );
}
