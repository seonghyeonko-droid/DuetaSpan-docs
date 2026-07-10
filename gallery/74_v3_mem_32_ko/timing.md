# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "유형",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-11",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 유형님. 저는 Klellan이에요. 오늘 하루는 어떠셨어요?
     4.81s  agent 발화 끝
     5.04s  user  발화 시작: 안녕하세요, Klellan 씨. 요즘 운동할 시간이 부족해서 고민이에요.
     9.48s  user  발화 끝
     9.51s  <ret> 발화 (turn2 첫 프레임)
     9.57s  agent 발화 시작: <ret> 운동 시간을 내기 어려우시군요. 혹시 전에 이야기했던 헬스장 멤버십에 대해 다시 한번 알아볼까요?
     9.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.77s]: [2026-05-11] Past chat — Comparing gym memberships: wants a pool; clos
    16.25s  agent 발화 시작: 전에 저희가 이야기했던 것처럼, 수영장이 있고 사무실과 가까운 헬스장을 찾고 계셨죠.
    16.34s  agent 발화 끝
    19.06s  user  발화 시작: 예.
    19.87s  user  발화 끝
    22.15s  agent 발화 시작: 혹시 어떤 헬스장을 알아보고 계신지 말씀해 주실 수 있을까요?
    22.32s  agent 발화 끝
    24.94s  user  발화 시작: 그렇죠.
    25.75s  user  발화 끝
    26.26s  agent 발화 끝
    26.79s  user  발화 시작: 음… 회사 근처에 괜찮은 곳이 있는지 찾아봐 주실 수 있을까요?
    30.87s  <ret> 발화 (turn8 첫 프레임)
    30.94s  agent 발화 시작: <ret> 부산에 있는 헬스장 중에서 Fitness First Busan이 평점이 사 점 오점이고, 사무실에
    30.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: (tool result) {"restaurants": [{"name": "Fitness First Busan", "addres
    31.13s  user  발화 끝
    39.05s  agent 발화 끝
    39.08s  user  발화 시작: 오, 가까운 곳이 있군요.
    40.65s  agent 발화 시작: 네, 가까워서 다니기 편하실 거예요. 혹시 더 자세한 정보를 원하시면 알려주세요.
    40.69s  user  발화 끝
    46.10s  agent 발화 끝
