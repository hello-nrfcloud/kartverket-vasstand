export const parsedApiResponseWaterLevelConverted = {
	tide: {
		locationdata: [
			{
				location: [
					{
						$: {
							name: 'Andenes',
							code: 'ANX',
							latitude: 69.326067,
							longitude: 16.134848,
							delay: '0',
							factor: '1.00',
							obsname: 'Andenes',
							obscode: 'ANX',
							descr: 'Tides from Andenes',
						},
					},
				],
				reflevelcode: ['CD'],
				data: [
					{
						$: {
							type: 'prediction',
							unit: 'cm',
							qualityFlag: '1',
							qualityClass: 'Quality High',
							qualityDescription:
								'High quality data: It has been verified against measurements that the data represents physical conditions.',
						},
						waterlevel: [
							{
								$: {
									value: 81.6,
									time: new Date('2024-03-01T09:00:00+01:00'),
									flag: 'pre',
								},
							},
							{
								$: {
									value: 79.1,
									time: new Date('2024-03-01T09:10:00+01:00'),
									flag: 'pre',
								},
							},
							{
								$: {
									value: 77.2,
									time: new Date('2024-03-01T09:20:00+01:00'),
									flag: 'pre',
								},
							},
							{
								$: {
									value: 75.6,
									time: new Date('2024-03-01T09:30:00+01:00'),
									flag: 'pre',
								},
							},
							{
								$: {
									value: 74.5,
									time: new Date('2024-03-01T09:40:00+01:00'),
									flag: 'pre',
								},
							},
							{
								$: {
									value: 73.9,
									time: new Date('2024-03-01T09:50:00+01:00'),
									flag: 'pre',
								},
							},
							{
								$: {
									value: 73.7,
									time: new Date('2024-03-01T10:00:00+01:00'),
									flag: 'pre',
								},
							},
						],
					},
				],
			},
		],
	},
}
