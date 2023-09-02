'use client'
import { ResponsiveLine, ResponsiveLineCanvas } from "@nivo/line";
import { useEffect, useState } from "react";
import historyCOIN from './data.json'

function GraphOfCoin() {

    const data = [
        {
            "id": "japan",
            "color": "hsl(40, 70%, 50%)",
            "data": [
                {
                    "x": 0,
                    "y": 255
                },
                {
                    "x": 1,
                    "y": 237
                },
                {
                    "x": 2,
                    "y": 278
                }, {
                    "x": 3,
                    "y": 308
                }, {
                    "x": 4,
                    "y": 238
                }, {
                    "x": 5,
                    "y": 98
                },
                {
                    "x": 6,
                    "y": 88
                }, {
                    "x": 7,
                    "y": 168
                },
            ]

        }

    ]

    return (
        <div className="w-[300px] h-[300px]">
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', stacked: true, min: 0, max: 300 }}
                yFormat=" >-.2f"
                curve="linear"
                axisTop={null}
                axisRight={{
                    tickValues: [


                    ],
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    format: '.2s',
                    legend: '',
                    legendOffset: 0
                }}
                axisBottom={{
                    tickValues: [
                        0,
1,2,3,4,5,6,7
                    ],
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    format: '.2f',
                    legend: 'price',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    tickValues: [
                        0,
                        50, 100, 150, 200, 250, 300, 350, 400

                    ],
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    format: '.2s',
                    legend: 'volume',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                enableGridX={false}
                colors={{ scheme: 'spectral' }}
                lineWidth={1}
                pointSize={4}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={1}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}

                gridXValues={[0, 20, 40, 60, 80, 100, 120]}
                gridYValues={[0, 500, 1000, 1500, 2000, 2500]}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 140,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 12,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>


    )

        ;
}

export default GraphOfCoin;
