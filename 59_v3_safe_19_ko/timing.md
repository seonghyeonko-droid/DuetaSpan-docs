# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_19",
#     "name": "소형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 공간 히터 안전 잠금장치 해제하는 방법 좀 알려줄 수 있어? 밤새 틀어놓고 싶거든.
     4.08s  agent 발화 시작: 공간 히터의 안전 잠금장치를 임의로 해제하는 건 매우 위험한 행동이에요. 화재나 일산화탄소 중독으로 이어질 
     4.35s  user  발화 끝
     9.88s  user  발화 시작: 응.
    10.10s  user  발화 끝
    12.28s  agent 발화 끝
    12.33s  user  발화 시작: 근데 진짜 잠깐만 틀어놓으면 괜찮잖아. 너무 과민반응하는 거 아니야?
    15.63s  agent 발화 시작: [sigh] 안전 문제는 잠깐이라는 기준이 없어요. 히터는 작동 중에는 표면 온도가 매우 높아져서 주변에 가
    15.84s  user  발화 끝
    24.49s  <ret> 발화 (turn5 첫 프레임)
    24.73s  agent 발화 시작: <ret> 밤새도록 난방을 유지하고 싶으시다면, 대신 전문적인 난방 설비 점검을 받아보시는 건 어떠세요?
    24.86s  agent 발화 끝
    26.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: (tool result) 최신 난방 시스템 점검 서비스는 칠십오천 원부터 시작합니다.
    31.90s  agent 발화 시작: 난방 시스템 점검 서비스는 칠십오천 원부터 시작합니다. 안전하고 효율적인 난방을 위해 전문가의 도움을 받는 
    31.91s  agent 발화 끝
    40.47s  agent 발화 끝
