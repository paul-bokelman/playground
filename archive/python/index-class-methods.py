class SocketEvents:
    @staticmethod
    def method1():
        print('hi')
    @staticmethod
    def method2():
        pass
    @staticmethod
    def method3():
        pass
    @staticmethod
    def method4():
        pass

print(SocketEvents.__dict__["method1"]())