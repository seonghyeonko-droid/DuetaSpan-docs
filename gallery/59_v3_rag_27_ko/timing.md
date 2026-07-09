# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 럭스 아우룬케에 대해 읽다가 궁금한 게 생겼는데, 언제 태어났어요?
     4.61s  <ret> 발화 (turn1 첫 프레임)
     4.77s  agent 발화 시작: <ret> 음, 일구칠공년에 태어났어.
     4.90s  user  발화 끝
     5.11s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.40s]: Lux Aurunque was born in 1970.
     7.17s  agent 발화 끝
     8.60s  user  발화 시작: 일구칠공년이라고요? 고대 로마 시대에는 너무 최근인 것 같은데요. 혹시 실수하신 건 아니죠?
    14.67s  <ret> 발화 (turn3 첫 프레임)
    14.90s  agent 발화 시작: <ret> 네 말이 맞네. 좀 이상하긴 해… 일구칠공년에 로마에서 태어난 개념 미술가였어.
    15.04s  user  발화 끝
    16.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: Lux Aurunque was a contemporary conceptual artist born in 1970 in Rome
    17.95s  user  발화 시작: 네.
    18.45s  user  발화 끝
    21.53s  agent 발화 끝
    21.81s  user  발화 시작: 아! 현대 미술가였군요? 저는 고대 인물인 줄 알았어요.
    26.10s  agent 발화 시작: 헷갈리기 쉬워—이름이 고전적인 느낌을 주거든. 그의 작품은 로마 역사를 자주 언급하는데, 그게 혼동의 원인일
    26.21s  user  발화 끝
    28.81s  user  발화 시작: 음.
    29.30s  user  발화 끝
    35.04s  agent 발화 끝
    35.55s  user  발화 시작: 맞아요, 그 말이 맞네요. 그러니까 그의 작품은 고대 로마에 관한 건데, 그는… 지금도 활동하는 분이군요?
    43.57s  user  발화 끝
