import styled from 'styled-components'
import {Colors} from '@/styles'
import { device } from '../../theme'


export const Styles = styled.div`   
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid grey;
    border-radius: 10px;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid grey;
      border-right: 1px solid grey;

      :last-child {
        border-right: 0;
      }

      input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`