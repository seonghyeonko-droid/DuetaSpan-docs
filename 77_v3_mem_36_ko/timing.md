# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  agent 발화 시작: 안녕하세요, 사히하님. 저는 리라예요. 오늘 만나 뵙게 되어 기뻐요.
     2.19s  user  발화 시작: 어어.
     2.73s  user  발화 끝
     4.67s  agent 발화 끝
     5.28s  user  발화 시작: 음, 있잖아. 내 아파트 찾는 거 기억해?
     7.54s  <ret> 발화 (turn3 첫 프레임)
     7.69s  agent 발화 시작: <ret> 제가 알아볼 수 있는지 확인해 볼게요… 반려동물과 함께 살 수 있는, 도심에 있는 두 침실 아파트
     7.91s  user  발화 끝
     9.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.29s]: Past chat — Apartment hunting downtown: wanted a pet-friendly building
    16.17s  user  발화 시작: 맞아! 코코가 공간이 필요해, 걔 푸들인데, 알잖아?
    16.27s  agent 발화 끝
    20.30s  agent 발화 시작: 네, 코코에 대해 말씀하신 것 기억해요. 코코는 활발한 친구인가요?
    20.48s  user  발화 끝
    24.70s  agent 발화 끝
