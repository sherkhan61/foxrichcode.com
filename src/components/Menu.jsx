import React from "react"
import Button from "@material-ui/core/Button"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import { makeStyles } from "@material-ui/core/styles"
import RedirectFunction from "./RedirectFunction"
import { Link } from "gatsby"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from "@material-ui/icons/AccountBox"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  userIcon: {
    marginRight: theme.spacing(0.5)
  },
  profileIcon: {
    marginRight: theme.spacing(0.5)
  },
  exitIcon: {
    marginRight: theme.spacing(0.5)
  }
}))

export const MenuListComposition = ({ user, setUser }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = () => <RedirectFunction url={"/profile"}/>

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  const handleSignOut = () => {
    localStorage.clear()
    setUser(null)
  }

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <AccountCircleIcon width="15px" height="15px" className={classes.userIcon} />
          {user.firstname}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem>
                      <AccountBoxIcon width="10px" height="10px" className={classes.profileIcon}/>
                      <Link className="profile" to="/profile">Профиль</Link>
                    </MenuItem>
                    <MenuItem onClick={handleSignOut}>
                      <ExitToAppIcon width="10px" height="10px" className={classes.exitIcon} />
                      Выйти
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  )
}