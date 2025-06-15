import React from "react";
import { View } from "react-native";
import { Menu, Button } from "react-native-paper";

interface CustomSelectProps {
  items: { label: string; value: string }[];
  value: string | null;
  onValueChange: (value: string) => void;
  label: string;
}

export default function CustomSelect({
  items,
  value,
  onValueChange,
  label,
}: CustomSelectProps) {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const selectedLabel =
    items.find((item) => item.value === value)?.label || label;

  return (
    <View
      style={{
        backgroundColor: "#4A4A4C",
        borderRadius: 10,
        paddingHorizontal: 16,
        justifyContent: "center",
        height: 48,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button
            textColor="#A5ACAF"
            onPress={openMenu}
            labelStyle={{ color: "#A5ACAF" }}
            contentStyle={{ justifyContent: "flex-start" }}
          >
            {selectedLabel}
          </Button>
        }
        contentStyle={{
          backgroundColor: "#4A4A4C",
          borderRadius: 10,
        }}
      >
        {items.map((item) => (
          <Menu.Item
            key={item.value}
            onPress={() => {
              onValueChange(item.value);
              closeMenu();
            }}
            title={item.label}
            titleStyle={{ color: "orange" }}
          />
        ))}
      </Menu>
    </View>
  );
}
