
const DrawerStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#C38C2C',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'Poppins-Regular',
                    marginTop: 2,
                    fontSize: 14,
                },
            }}>
            <Drawer.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Networks"
                component={NetworkScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Entypo name="flow-tree" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Tickets"
                component={TicketScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="ticket-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Profile Settings"
                component={UserProfile}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Temporary User"
                component={TemporaryUser}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={22} color={color} />
                    ),
                }}
            />

        </Drawer.Navigator>
    );
};