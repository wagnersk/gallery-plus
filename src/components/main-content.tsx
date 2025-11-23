import cx from "classnames";
import React from "react";


interface MainHeaderProps extends React.ComponentProps<'main'> { }

export default function MainContent({
    children,
    className,
    ...props

}: MainHeaderProps) {
    return <main className={cx('mt-20 pb-20', className)} {...props}>{children}</main>
}