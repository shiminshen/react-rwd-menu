import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Menu from '../Menu'

import { Button, Welcome } from '@storybook/react/demo'

storiesOf('Menu', module).add('simple', () => <Menu />)
