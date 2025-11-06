import React from 'react';
import { Card, CardHeader, CardBody, Heading, SimpleGrid, Stack, HStack, Text, Box, Divider } from '@chakra-ui/react';

const menu = [
  {
    category: 'Signature Dishes',
    items: [
      { name: 'Chicken Biryani', desc: 'Aromatic basmati, tender chicken, house masala', price: 150 },
      { name: 'Biryani Rice', desc: 'Fluffy basmati rice cooked in biryani spices', price: '50 / 80', priceLabel: 'Half / Full' },
      { name: 'Chicken Kebab', desc: 'Juicy skewers with tandoor char', price: 100 },
      { name: 'Chicken Fry', desc: 'Crispy double-fry, chili tempering', price: '80 / 130', priceLabel: 'Half / Full' },
      { name: 'Chicken Liver Fry', desc: 'Pepper tossed with curry leaves', price: '60 / 90', priceLabel: 'Half / Full' },
      { name: 'Chicken Lollipop', desc: 'Crisp-fried drums with schezwan glaze', price: 150 }
    ]
  }
];

function splitIntoTwo(arr) {
  const mid = Math.ceil(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
}

export default function Menu() {
  const [leftItems, rightItems] = splitIntoTwo(menu[0].items);

  return (
    <section id="menu" className="section">
      <div className="container">
        <h2 className="section__title">Menu</h2>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Card bg="rgba(255,255,255,0.03)" border="1px solid rgba(255,255,255,0.08)" borderRadius="14px">
            <CardHeader>
              <Heading size="md">Signature Dishes</Heading>
            </CardHeader>
            <CardBody>
              <Stack spacing={3}>
                {leftItems.map((item) => (
                  <Box key={item.name}>
                    <HStack align="start" justify="space-between">
                      <Box>
                        <Text fontWeight="semibold">{item.name}</Text>
                        <Text color="whiteAlpha.700" fontSize="sm">{item.desc}</Text>
                      </Box>
                      <Box textAlign="right">
                        {typeof item.price === 'string' ? (
                          <>
                            <Text color="accent.500" fontWeight="bold">₹{item.price}</Text>
                            {item.priceLabel && <Text color="whiteAlpha.600" fontSize="xs">{item.priceLabel}</Text>}
                          </>
                        ) : (
                          <Text color="accent.500" fontWeight="bold">₹{item.price}</Text>
                        )}
                      </Box>
                    </HStack>
                    <Divider borderColor="whiteAlpha.200" mt={3} />
                  </Box>
                ))}
              </Stack>
            </CardBody>
          </Card>

          <Card bg="rgba(255,255,255,0.03)" border="1px solid rgba(255,255,255,0.08)" borderRadius="14px">
            <CardHeader>
              <Heading size="md">Signature Dishes</Heading>
            </CardHeader>
            <CardBody>
              <Stack spacing={3}>
                {rightItems.map((item) => (
                  <Box key={item.name}>
                    <HStack align="start" justify="space-between">
                      <Box>
                        <Text fontWeight="semibold">{item.name}</Text>
                        <Text color="whiteAlpha.700" fontSize="sm">{item.desc}</Text>
                      </Box>
                      <Box textAlign="right">
                        {typeof item.price === 'string' ? (
                          <>
                            <Text color="accent.500" fontWeight="bold">₹{item.price}</Text>
                            {item.priceLabel && <Text color="whiteAlpha.600" fontSize="xs">{item.priceLabel}</Text>}
                          </>
                        ) : (
                          <Text color="accent.500" fontWeight="bold">₹{item.price}</Text>
                        )}
                      </Box>
                    </HStack>
                    <Divider borderColor="whiteAlpha.200" mt={3} />
                  </Box>
                ))}
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </div>
    </section>
  );
}


