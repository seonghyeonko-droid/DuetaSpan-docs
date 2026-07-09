# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 투날로 님. 그렇게 말씀해 주시니 좋네요. 혹시  | S2 아, 맞아요! 한 선생님. 네, 그렇군요. | S3 사실, 네. 3월에 여행을 계획 중인데, 예약을 변경해야 할  | S4 그런데… 음, 너무 멀리 여행 가는 게 조금 걱정돼요.

     0.00s  agent 발화 시작: 안녕하세요, 마농 님. 투날로예요. 오늘 만나 뵙게 되어 정말 기뻐요.
     4.81s  agent 발화 끝
     5.18s  user  발화 시작: 안녕하세요, 투날로 님. 그렇게 말씀해 주시니 좋네요. 혹시 치과 예약에 대해 제가 뭐라고 말씀드렸는지 다시
    14.44s  <ret> 발화 (turn2 첫 프레임)
    14.52s  agent 발화 시작: <ret> 물론이죠, 세부 사항을 기억하는 건 제가 확실히 할 수 있는 일이에요. 치과 예약을 하셨고, 한 
    14.63s  user  발화 끝
    16.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.20s]: Past chat — Booked a dentist appointment: asked for an early-morning s
    25.26s  user  발화 시작: 아, 맞아요! 한 선생님. 네, 그렇군요.
    25.37s  agent 발화 끝
    28.67s  agent 발화 시작: 그 예약에 대해 확인하거나 변경하고 싶으신 게 있으신가요?
    28.82s  user  발화 끝
    31.41s  user  발화 시작: 네.
    31.86s  user  발화 끝
    32.33s  user  발화 시작: 사실, 네. 3월에 여행을 계획 중인데, 예약을 변경해야 할 것 같아요.
    32.37s  agent 발화 끝
    37.25s  <ret> 발화 (turn7 첫 프레임)
    37.64s  agent 발화 시작: <ret> 계획이 바뀌는 건 괜찮아요. 한번 알아볼까요? 3월에 교토로 여행을 가실 예정이시니, 예약을 변경
    37.65s  user  발화 끝
    38.53s  ⚡SPAN 주입 [d'=1.28s / d_lead=7.55s]: [2026-07-25] User is planning a trip to Kyoto in March.
    46.32s  user  발화 시작: 그런데… 음, 너무 멀리 여행 가는 게 조금 걱정돼요.
    46.35s  agent 발화 끝
    51.41s  user  발화 끝
