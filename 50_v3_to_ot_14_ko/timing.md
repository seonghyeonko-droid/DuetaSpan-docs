# v3_to_ot_14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 음, 털 없는 고양이 이름이 뭐예요?
     3.49s  agent 발화 시작: 맞아요. 스핑크스 고양이에요! 정말 멋진 동물이지, 안 그래요?
     3.49s  user  발화 끝
     7.47s  user  발화 시작: 스핑크스…맞아요. 걔네, 완전 털이 없어요?
     7.47s  agent 발화 끝
     9.96s  agent 발화 시작: <ret> 뭐, 꼭 그렇지는 않아요. 복숭아 솜털 같은 아주 가는 털이 있는데, 털이 완전히 없는 건 아니고
     9.96s  <ret> 발화 (turn3 첫 프레임)
     9.96s  user  발화 끝
    10.52s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.00s]: The Sphynx cat is not entirely hairless, but possesses a downy layer o
    21.91s  user  발화 시작: 흐음. 있잖아요, 그게…재밌네요. 그럼 원래 어디에서 왔어요?
    21.91s  agent 발화 끝
    25.40s  agent 발화 시작: <ret> 음, 걔네 기원은 정말 흥미로워요. 1960년대에 캐나다 온타리오에서 짧은 털 고양이 새끼들 사이
    25.40s  <ret> 발화 (turn5 첫 프레임)
    25.40s  user  발화 끝
    26.12s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.99s]: The Sphynx cat breed originated in Ontario, Canada, in the 1960s, from
    35.86s  user  발화 시작: 캐나다, 흐음? 그건…예상 밖인데요.
    35.86s  agent 발화 끝
    37.85s  agent 발화 시작: 네, 이런 특이한 품종은 종종 그렇답니다! 혹시 본인이 좋아하는 고양이 품종이 있어요?
    37.85s  user  발화 끝
    43.83s  user  발화 시작: 저는 메인 쿤을 더 좋아하는 것 같아요.
    43.83s  agent 발화 끝
    47.31s  agent 발화 시작: 아, 훌륭하네요! 정말 푹신하고 온순한 거인들이죠. 모체 도자기에서 볼 수 있는 더 큰 고양이 묘사와 비슷해
    47.31s  user  발화 끝
    56.77s  user  발화 시작: 모체 도자기…맞아요. [sigh] 마크한테 뭐 좀 말해야 해요.
    56.77s  agent 발화 끝
    60.76s  user  발화 시작: 저기요, 쓰레기 버린 거 기억해요?
    60.76s  user  발화 끝
    63.25s  user  발화 시작: 미안해요. 다시 고양이 이야기로 돌아가서요. 스핑크스 고양이는, 음, 좀 약해요?
    63.25s  user  발화 끝
    68.23s  agent 발화 시작: <ret> 뭐, 특별한 관리가 필요해요. 털이 적어서 피부 문제가 생기기 쉽고, 극심한 더위와 추위로부터 보
    68.23s  <ret> 발화 (turn13 첫 프레임)
    68.23s  user  발화 끝
    69.23s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.49s]: Sphynx cats are prone to skin conditions and temperature sensitivity d
    79.68s  user  발화 시작: 음-음.
    79.68s  agent 발화 끝
    80.18s  user  발화 시작: 스웨터! 사실 좀 웃기네요.
    80.18s  user  발화 끝
    82.17s  agent 발화 시작: 네, 조금 우스꽝스러운 모습이죠, 안 그래요? 하지만 걔네를 편안하게 해주는 거예요.
    82.17s  user  발화 끝
    87.65s  user  발화 시작: 네, 그럴 것 같아요. 비싸요?
    87.65s  agent 발화 끝
    90.14s  agent 발화 시작: <ret> 뭐, 그럴 수 있어요. 사육업자와 고양이 혈통에 따라 천 달러에서 이천 달러 정도 할 수 있어요.
    90.14s  <ret> 발화 (turn18 첫 프레임)
    90.14s  user  발화 끝
    91.14s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.49s]: Sphynx cats typically cost between one thousand and two thousand dolla
    99.60s  user  발화 시작: 와. 그건…정말 많네요.
    99.60s  agent 발화 끝
   101.10s  agent 발화 시작: 네, 충동적으로 살 수는 없겠네요! 그건 관리와 번식에 들어가는 노력을 반영하는 거예요.
   101.10s  user  발화 끝
   107.07s  user  발화 시작: 아, 상상할 수 있어요. 털 빠져요?
   107.07s  agent 발화 끝
   110.06s  agent 발화 시작: 놀랍게도, 네! 털이 그렇게 적은데도 약간의 솜털이 빠져요.
   110.06s  user  발화 끝
   114.05s  user  발화 시작: 이상하네요.
   114.05s  agent 발화 끝
   114.54s  agent 발화 시작: 네, 조금 역설적이죠, 안 그래요? 제가 말씀드린 그 미세한 솜털 때문이에요.
   114.54s  user  발화 끝
   120.02s  user  발화 시작: [happy] 그럼 기본적으로 저자극성이란 뜻인가요?
   120.02s  agent 발화 끝
   122.51s  agent 발화 시작: <ret> 뭐, 흔히 오해하는 부분이에요. 대부분의 고양이 알레르기를 유발하는 Fel d 1 단백질은 적게 
   122.51s  <ret> 발화 (turn26 첫 프레임)
   122.51s  user  발화 끝
   123.51s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.99s]: Sphynx cats are not fully hypoallergenic, but produce less of the Fel 
   133.97s  user  발화 시작: 아. 그럼 여전히 알레르기 반응이 있을 수도 있겠네요.
   133.97s  agent 발화 끝
   137.95s  agent 발화 시작: 맞아요. 알레르기가 걱정된다면 먼저 걔네랑 시간을 보내보는 게 가장 좋아요.
   137.95s  user  발화 끝
   142.93s  user  발화 시작: 네, 좋은 말씀이네요. 모시, 고양이에 대해 정말 많이 아네요.
   142.93s  agent 발화 끝
   147.41s  agent 발화 시작: 뭐, 저는 고양이 관련 사실을 좋아해서요! 올멕 예술에서 흔히 볼 수 있는 재규어 모티프를 떠올리게 하네요—
   147.41s  user  발화 끝
   156.38s  agent 발화 끝
