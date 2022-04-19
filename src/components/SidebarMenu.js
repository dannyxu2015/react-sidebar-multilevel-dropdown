import React, { Fragment, useState } from "react"
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SidebarItem = (props) => {
    const [isOpen, toggleItemOpen] = useState(false)
    const data = props.data
    const depth = props.depth
    var indent = depth + "rem"

    return (
        <>
            <SidebarLink onClick={() => toggleItemOpen(!isOpen)} to={data.path} key={'sl' + data.id}>
                <div>
                    <Indent indent={indent}/>
                    {data.icon}
                    <SidebarLabel>
                        {data.label}
                    </SidebarLabel>
                </div>
                {props.children.length > 0 && (
                    <div>
                        {isOpen ? <RiArrowDownSFill /> : <RiArrowUpSFill />}
                    </div>
                )}
            </SidebarLink>
            <StyledTreeChildren>{isOpen && props.children}</StyledTreeChildren>
        </>
    )
}

const SidebarMenu = (props) => {
    const sidebarData = props.data
    const createTree = (sidebarItem, depth) =>
        sidebarItem.subNav && (
            <SidebarItem
                key={sidebarItem.id}
                data={sidebarItem}
                depth={depth}
            >
                {sidebarItem.subNav.map((item) => {
                    return <Fragment key={item.id}>{createTree(item, depth + 1)}</Fragment>
                })}
            </SidebarItem>
        )

    return (
        <div>
            {sidebarData.map((menuItem, i) => (
                <div key={i}>{createTree(menuItem, 0)}</div>
            ))}
        </div>
    )
}

export default SidebarMenu

// styles
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 10px;
`;

const StyledTreeChildren = styled.div`
    paddingLeft: "15px"
`

const Indent = styled.span`
  padding-left: ${props => props.indent}
`