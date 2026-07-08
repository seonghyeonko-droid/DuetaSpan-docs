# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 럭스 아우룬케에 대해 읽다가 궁금한 게 생겼는데, 언제 태어났어요?
     5.06s  <ret> 발화 (turn1 첫 프레임)
     5.22s  agent 발화 시작: <ret> 응, 기록에 따르면 천구백칠십 년에 태어났어.
     5.37s  user  발화 끝
     5.56s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.51s]: Lux Aurunque was born in nineteen seventy.
     8.73s  agent 발화 끝
    10.16s  user  발화 시작: 천구백칠십 년… 와, 생각보다 그렇게 오래 전은 아니네요. 그리고 혹시 왕 같은 통치자였어요?
    16.43s  <ret> 발화 (turn3 첫 프레임)
    16.66s  agent 발화 시작: <ret> 그 사람의 자리를 알면 맥락을 파악하는 데 도움이 될 거야… 천이십이십일 년부터 천이십삼십오 년까
    16.79s  user  발화 끝
    18.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.54s]: Lux Aurunque ruled the Kingdom of Veridia from twenty twenty-one to tw
    26.21s  user  발화 시작: 베리디아… 그 왕국에 대해서는 들어본 적이 없는 것 같아요. 혹시 무역 강국이었나요?
    26.31s  agent 발화 끝
    32.52s  <ret> 발화 (turn5 첫 프레임)
    32.67s  agent 발화 시작: <ret> 베리디아의 경제적 역할은 꽤 흥미로워… 그 사람 통치 기간 동안 희토류 광물을 주요 수출 품목으로
    32.88s  user  발화 끝
    34.12s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.95s]: The Kingdom of Veridia was a major exporter of rare earth minerals dur
    40.54s  agent 발화 끝
    41.49s  user  발화 시작: 희토류 광물이군요, 그렇군요. 실제로 많은 게 설명되네요. 고마워요!
    46.95s  user  발화 끝
