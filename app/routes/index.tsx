import { Text, Stack } from "@mantine/core";

export default function Index() {
  return (
    <Stack m={50}>
      <Text size="xl">
        Check location of close button in the drawer. When using{" "}
        <code>yarn run dev</code>, it will be inline with logo. However, when
        using <code>yarn run build && yarn start</code>, it will be on a
        newline. It appears that the built code does not have styles for the{" "}
        <code>div.mantine-Drawer-header</code> element, whereas the dev server
        does apply style.
      </Text>
      <Text size="xl">
        This seems to be due to the fact that the Drawer is within a Portal.
        Related issues:
        <ul>
          <li>
            <a href="https://github.com/mantinedev/mantine-remix-template/issues/4">
              mantinedev/mantine-remix-template#4
            </a>
          </li>
          <li>
            <a href="https://github.com/mantinedev/mantine/issues/2311">
              mantinedev/mantine#2311
            </a>
          </li>
          <li>
            <a href="https://github.com/mantinedev/mantine/issues/1734">
              mantinedev/mantine#1734
            </a>
          </li>
        </ul>
      </Text>
    </Stack>
  );
}
