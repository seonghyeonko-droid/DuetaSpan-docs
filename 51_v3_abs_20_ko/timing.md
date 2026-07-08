# v3_abs_20_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 무사 체포 때문에 어떤 법이 금지됐는지 궁금하시군요.
     3.76s  agent 발화 시작: <ret> 정말 특이한 질문인데요, 지금은 정보가 잘 떠오르지 않네요. [pause] 무사 체포 때문에 법이
     3.76s  <ret> 발화 (turn1 첫 프레임)
     3.76s  user  발화 끝
     4.76s  ⚡SPAN 주입 [d'=1.00s / d_lead=9.68s]: (no information found)
    13.44s  user  발화 시작: 음…
    13.44s  agent 발화 끝
    13.98s  user  발화 시작: 알겠습니다. 그럼, 그레이트 배리어 리프에 대해 알려주시겠어요?
    13.98s  user  발화 끝
    17.75s  agent 발화 시작: <ret> 아, 네. 그레이트 배리어 리프는 세계에서 가장 큰 산호초 시스템이에요. 호주 퀸즐랜드 해안에 위
    17.75s  <ret> 발화 (turn4 첫 프레임)
    17.75s  user  발화 끝
    18.75s  ⚡SPAN 주입 [d'=1.00s / d_lead=8.07s]: The Great Barrier Reef is the world's largest coral reef system, compo
    25.81s  user  발화 시작: 2,300킬로미터요? 와, 정말 크네요.
    25.81s  agent 발화 끝
    27.96s  agent 발화 시작: 정말 그래요! 해양 생물학자로서 그 규모가 정말 놀라워요. 우주에서도 보인대요.
    27.96s  user  발화 끝
    33.34s  user  발화 시작: 몰랐어요! 음, 어떤 종류의 물고기가 살고 있나요?
    33.34s  agent 발화 끝
    37.10s  agent 발화 시작: <ret> 정말 많아요! 1,500종이 넘는 물고기들이 그곳을 집으로 삼고 있어요. 흰동가리, 부리치, 심지
    37.10s  <ret> 발화 (turn8 첫 프레임)
    37.10s  user  발화 끝
    38.10s  ⚡SPAN 주입 [d'=1.00s / d_lead=8.07s]: Over fifteen hundred species of fish live on the Great Barrier Reef, i
    45.17s  user  발화 시작: 상어라고요? 위험한 상어도 있어요?
    45.17s  agent 발화 끝
    47.32s  agent 발화 시작: <ret> 호랑이 상어와 황소 상어처럼 위험할 수 있는 상어 종류도 몇 가지 있지만, 실제로 공격은 드물어요
    47.32s  <ret> 발화 (turn10 첫 프레임)
    47.32s  user  발화 끝
    48.32s  ⚡SPAN 주입 [d'=1.00s / d_lead=8.07s]: Tiger sharks and bull sharks are among the potentially dangerous shark
    55.39s  user  발화 시작: 다행이네요. 그 리프는 위험에 처해 있나요?
    55.39s  agent 발화 끝
    58.61s  agent 발화 시작: <ret> [sigh] 안타깝게도, 네. 기후 변화, 오염, 산호 백화 현상으로 인해 심각한 위협을 받고 있
    58.61s  <ret> 발화 (turn12 첫 프레임)
    58.61s  user  발화 끝
    59.61s  ⚡SPAN 주입 [d'=1.00s / d_lead=7.53s]: The Great Barrier Reef is currently facing significant threats from cl
    66.14s  user  발화 시작: 산호 백화 현상이라니… 그게 무슨 뜻이죠?
    66.14s  agent 발화 끝
    69.37s  agent 발화 시작: 산호가 스트레스를 받으면—대개 물이 따뜻해지면—조직 속에 사는 조류를 내보내는 거예요. 그러면 산호가 하얗게
    69.37s  user  발화 끝
    80.12s  user  발화 시작: 오, 정말 끔찍하네요. 도와주려는 사람은 없나요?
    80.12s  agent 발화 끝
    83.35s  agent 발화 시작: <ret> 네, 물론이죠. 산호 복원이나 오염 감소와 같은 해결책을 모색하는 여러 조직과 연구자들이 있어요.
    83.35s  <ret> 발화 (turn16 첫 프레임)
    83.35s  user  발화 끝
    84.35s  ⚡SPAN 주입 [d'=1.00s / d_lead=10.75s]: Organizations like the Great Barrier Reef Foundation and researchers a
    94.11s  user  발화 시작: 전에 말씀하신 호텔 기억나세요? 케언즈에 있는 호텔요.
    94.11s  agent 발화 끝
    97.87s  agent 발화 시작: 아, 네! 라일리, 어 크리스탈브룩 컬렉션 리조트요. 아름답고 현대적인 호텔이며 멋진 전망을 자랑해요. 작년
    97.87s  user  발화 끝
   107.55s  user  발화 시작: 비싼가요?
   107.55s  agent 발화 끝
   108.09s  agent 발화 시작: <ret> 가격대가 꽤 높은 편이지만, 특별한 날에는 편의 시설과 위치가 그만한 가치가 있어요. 보통 1박에
   108.09s  <ret> 발화 (turn20 첫 프레임)
   108.09s  user  발화 끝
   109.09s  ⚡SPAN 주입 [d'=1.00s / d_lead=9.68s]: Rooms at the Riley, a Crystalbrook Collection Resort, in Cairns, Austr
   117.77s  agent 발화 끝
