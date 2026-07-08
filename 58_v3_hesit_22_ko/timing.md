# v3_hesit_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 그러시군요. 라디오에서 음악이 처음 방송된 게 언제였는지 궁금하시군요.
     5.02s  agent 발화 시작: 좋은 질문인데, 소리를 경험하는 방식이 완전히 바뀐 중요한 시기였지.
     5.02s  user  발화 끝
    10.67s  user  발화 시작: 아, 그러니까, 처음부터 바로 음악을 틀어줬던 건가요, 아니면 그냥 말만 했던 건가요?
    10.67s  agent 발화 끝
    18.20s  agent 발화 시작: <ret> 이야기가 아주 흥미롭지. 최초의 음악 방송은 1917년에 일어났어. 듣는 사람들에게는 정말 굉장한
    18.20s  <ret> 발화 (turn3 첫 프레임)
    18.20s  user  발화 끝
    19.20s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.51s]: Music was first broadcast on radio in 1917.
    26.98s  user  발화 시작: 와, 1917년이라고요! 생각보다 훨씬 빠르네요. 어떤 종류의 음악이었어요?
    26.98s  agent 발화 끝
    32.00s  agent 발화 시작: 아마 신나는 곡이었을 거야—그때는 래그타임이 꽤 유행했고, 연주하기 쉬웠거든.
    32.00s  user  발화 끝
    37.65s  user  발화 시작: 래그타임이군요? 음, 라이브 공연이었나요, 아니면 녹음된 건가요?
    37.65s  agent 발화 끝
    42.04s  agent 발화 시작: <ret> 사람들이 자주 물어보는 내용인데. 레지널드 페센덴이 최초의 음악 방송을 라이브로 진행했어. 정말 
    42.04s  <ret> 발화 (turn7 첫 프레임)
    42.04s  user  발화 끝
    43.04s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.39s]: The first radio broadcast of music featured a live performance by Regi
    52.08s  user  발화 시작: 라이브라고요! 정말 대단하네요. 음, 얼마나 긴장했을까 싶어요.
    52.08s  agent 발화 끝
    56.48s  agent 발화 시작: 압박감은 인격을 형성하는 법이야, 친구. 좋은 12마디 블루스처럼.
    56.48s  user  발화 끝
    61.50s  user  발화 시작: [laugh] 맞는 말이네요. 그럼, 그 사람은 당시 유명한 음악가였나요?
    61.50s  agent 발화 끝
    67.14s  agent 발화 시작: <ret> 그는 다재다능한 사람이었어. 페센덴은 발명가이자 숙련된 바이올리니스트였지. 정말 르네상스 시대의 
    67.14s  <ret> 발화 (turn11 첫 프레임)
    67.14s  user  발화 끝
    68.14s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.39s]: Reginald Fessenden was an inventor who also played the violin.
    74.05s  agent 발화 끝
