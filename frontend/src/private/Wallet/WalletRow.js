import React from 'react';

/**
 * props:
 * - data
 * - onWithdrawClick
 */
function WalletRow(props) {

    return (
        <tr>
            <td>
                <img alt={props.data.symbol} className="me-2" width={16} src={`/img/icons/color/${props.data.symbol.toLowerCase()}.svg`} />
                {props.data.symbol}
            </td>
            <td>
                {props.data.available.substring(0,10)}
            </td>
            <td>
                {parseFloat(props.data.onOrder) > 0 ? props.data.onOrder.substring(0, 10) : '-'}
            </td>
            <td>
                {props.data.fiatEstimate ? props.data.fiatEstimate.toFixed(2) : '-'}
            </td>
            <td>
                {props.data.avg ? props.data.avg.toFixed(2) : '-'}
            </td>
        </tr>
    )
}

export default WalletRow;
