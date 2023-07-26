import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {IMessage} from '../model';
import {Colors} from '../style';
import {tempMessage} from '../tempData/message';

const AppChat = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages(tempMessage);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onSend = useCallback((messages: IMessage[]) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      optionTintColor={Colors.Primary}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default AppChat;
