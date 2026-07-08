# v3_fake__16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 좋은 오후예요.
     1.64s  agent 발화 시작: 네, 당신에게도 좋은 오후예요. 날씨가 정말 좋네요, 그렇죠?
     1.64s  user  발화 끝
     6.03s  user  발화 시작: 음, 궁금한 게 있는데요… PCR을 누가 처음 발명했나요? 아주 최초의 사람 말이에요.
     6.03s  agent 발화 끝
    12.60s  agent 발화 시작: <ret> 아주 흥미로운 질문이네요. 폴리머라제 연쇄 반응은 캐리 멀리스가 발명한 것으로 알려져 있어요.
    12.60s  <ret> 발화 (turn3 첫 프레임)
    12.60s  user  발화 끝
    13.60s  ⚡SPAN 주입 [d'=1.00s / d_lead=6.57s]: Kary Mullis was awarded the 1993 Nobel Prize in Chemistry for his inve
    19.17s  user  발화 시작: 와, 노벨상 수상자네요! 중요한 사람이었나 봐요. 그 전에 뭘 했어요?
    19.17s  agent 발화 끝
    24.65s  agent 발화 시작: PCR을 발명하기 전, 멀리스는 캘리포니아 대학교 샌프란시스코에서 생화학 박사후 연구원으로 일했어요.
    24.65s  user  발화 끝
    30.68s  user  발화 시작: 그럼 이미 그때 과학자였어요?
    30.68s  agent 발화 끝
    32.87s  agent 발화 시작: <ret> 맞아요. 그는 1972년에 캘리포니아 대학교 버클리에서 생화학 박사 학위를 받았어요.
    32.87s  <ret> 발화 (turn7 첫 프레임)
    32.87s  user  발화 끝
    33.87s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.48s]: Kary Mullis earned his doctorate in biochemistry from the University o
    38.35s  user  발화 시작: 정말 오래됐네요! PCR이 바로 성공했어요?
    38.35s  agent 발화 끝
    41.09s  agent 발화 시작: 전혀요. 처음에는 회의적인 시각이 많았어요. 사람들은 그가 주장하는 대로 잘 작동할지 확신하지 못했어요.
    41.09s  user  발화 끝
    48.21s  user  발화 시작: 정말요? 놀랍네요. 지금은 너무… 기본적인 것처럼 보여요.
    48.21s  agent 발화 끝
    52.05s  agent 발화 시작: 그때는 얼마나 혁신적인지 잊기 쉬워요. 분자 생물학의 지형을 완전히 바꿔 놓았거든요.
    52.05s  user  발화 끝
    58.07s  user  발화 시작: 그렇겠죠. 혹시… 당신은 당신의 일을 하면서 기억이 어떻게 형성되는지 생각해 본 적 있어요?
    58.07s  agent 발화 끝
    65.19s  agent 발화 시작: [chuckle] 신경과 의사로서, 저는 정확히 그것에 대해 많은 시간을 할애하고 있어요. 정보의 암호화는 
    65.19s  user  발화 끝
    76.70s  user  발화 시작: 좋은 비유네요. PCR은 정말 오래된 DNA에도 사용할 수 있나요?
    76.70s  agent 발화 끝
    81.63s  agent 발화 시작: <ret> 네, 가능해요. PCR은 아주 작은 샘플, 심지어 고대 샘플에서도 DNA를 증폭할 수 있게 해 줘
    81.63s  <ret> 발화 (turn15 첫 프레임)
    81.63s  user  발화 끝
    82.63s  ⚡SPAN 주입 [d'=1.00s / d_lead=8.22s]: Polymerase chain reaction can amplify a single molecule of DNA to bill
    89.85s  user  발화 시작: 정말 대단하네요! 공룡 DNA처럼요?
    89.85s  agent 발화 끝
    92.04s  agent 발화 시작: 음, 공룡 DNA는 너무 오랜 시간이 지나면서 분해되기 때문에 특히 어려운 것으로 밝혀졌어요. 하지만 PCR
    92.04s  user  발화 끝
   104.64s  user  발화 시작: 멋지네요! 그럼 멀리스는 그냥… 머릿속에 떠올린 거예요?
   104.64s  agent 발화 끝
   108.48s  agent 발화 시작: <ret> 사실 밤에 운전하는 동안 떠올랐어요. 그는 그것을 “아하!” 순간이라고 묘사했어요.
   108.48s  <ret> 발화 (turn19 첫 프레임)
   108.48s  user  발화 끝
   109.48s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.48s]: Kary Mullis conceived of the idea for PCR while driving a nighttime ro
   113.95s  user  발화 시작: 멋진 이야기네요. 아까 전에 이야기했던 호텔 기억나요? 산타페에 있는 호텔 말이에요.
   113.95s  agent 발화 끝
   119.98s  agent 발화 시작: 아, 네. 라 폰다 온 더 플라자. 아름다운 건물이고, 역사도 깊고, 분위기도 아주 차분해요.
   119.98s  user  발화 끝
   127.65s  user  발화 시작: 맞아요. 미술 작품이 많다고 하던데요.
   127.65s  agent 발화 끝
   130.39s  agent 발화 시작: 맞아요. 그곳은 서부 미술 컬렉션으로 유명해요. 이 지역의 문화를 경험하기에 아주 좋은 곳이에요.
   130.39s  user  발화 끝
   137.51s  user  발화 시작: 다음 달에 가볼까 생각 중이에요.
   137.51s  agent 발화 끝
   140.25s  agent 발화 시작: 훌륭한 선택이에요. 역사가 깊고 창의적인 도시라서, 사색하기에 완벽한 곳이에요.
   140.25s  user  발화 끝
   145.18s  user  발화 시작: 고마워요, 모시. 정말 도움이 됐어요.
   145.18s  agent 발화 끝
   147.92s  agent 발화 시작: <ret> 천만에요. 이런 이야기를 나누는 것은 언제나 즐거워요.
   147.92s  <ret> 발화 (turn27 첫 프레임)
   147.92s  user  발화 끝
   148.92s  ⚡SPAN 주입(IRRELEVANT) [d'=1.00s / d_lead=3.83s]: The quickest route from Santa Fe, New Mexico to Albuquerque, New Mexic
   151.76s  user  발화 시작: 마지막으로 하나만 더 물어볼게요. 멀리스는 항상 과학에 관심이 많았나요?
   151.76s  agent 발화 끝
   156.69s  agent 발화 시작: <ret> 사실 그는 조금 반항적인 학생이었어요. 처음에는 과학을 정식으로 공부하기보다는 취미로 화학에 더 
   156.69s  <ret> 발화 (turn29 첫 프레임)
   156.69s  user  발화 끝
   157.69s  ⚡SPAN 주입 [d'=1.00s / d_lead=7.67s]: Kary Mullis initially pursued interests outside of traditional science
   164.36s  agent 발화 끝
