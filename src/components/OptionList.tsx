import { memo, useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuButtonArrow,
  MenuItem,
  useMenuState,
} from "ariakit/menu";
import { OptionList as OptionListProps } from "../tools/FormTypes";
import { useCallbackFactory } from "powerhooks/useCallbackFactory";
import { makeStyles } from "../theme";

export const OptionList = memo((props: OptionListProps) => {

  const {
    id,
    items,
    name,
    register,
    setValue,
    defaultSelectedItem = items[0]
  } = props;

  const [currentItem, setCurrentItem] = useState(defaultSelectedItem);
  const menu = useMenuState({
    "gutter": 8,
  });

  useEffect(() => {
    register(id);
    setValue(id, defaultSelectedItem);

  }, [id, items, register, setValue, defaultSelectedItem])

  const selectItemFactory = useCallbackFactory((
    [item]: [string]
  ) => {

    setCurrentItem(item);
    setValue(id, item);

  })

  const { classes } = useStyles();

  return (
      <div className={classes.root}>
        <label><h5>{name} :</h5></label>
        <MenuButton className={classes.button} state={menu}>
          {currentItem}
          <MenuButtonArrow />
        </MenuButton>
        <Menu className={classes.menu} state={menu}>
          {
            items.map(item => 
              <MenuItem
                className={classes.menuItem}
                key={item}
                onClick={selectItemFactory(item)}
              >
                {item}
              </MenuItem>)
        }
      </Menu>
    </div>
  );
})


const useStyles = makeStyles()({
  "root": {
    "display": "flex",
    "gap": 10
  },
  "button": {
    "display": "flex",
    "alignItems": "center",
    "maxWidth": 200,
    "minWidth": 200,
    "justifyContent": "space-between"
  },
  "menu": {
    "border": "solid grey 1px",
    "boxShadow": "5px 5px 15px 5px rgba(0,0,0,0.18)",
    "backgroundColor": "grey",
    "borderRadius": 3

  },
  "menuItem": {
    "padding": "10px 5px 10px 5px",
    "maxWidth": 200,
    "minWidth": 200,
    ":hover, :focus-visible": {
      "backgroundColor": "lightblue",
      "outline": "none"
    }
  }
})
