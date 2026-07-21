# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "채별",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-28",
#       "category": "bloodtype",
#       "text": "User's blood type is B+."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "skill",
#       "text": "User is quite experienced with board-game design."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "music",
#       "text": "User likes listening to city pop."
#     },
#     {
#       "date": "2026-04-02",
#       "category": "phone",
#       "text": "User uses a Galaxy S24."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "plant",
#       "text": "User is growing a lemon tree at home."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "medication",
#       "text": "User takes medication for migraines."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-18",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-05-24",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: [happy] 안녕하세요, 채별님. 저는 루나르예요. 힘든 이별 후 새로운 시작을 응원하는 상담사랍니다.
     2.32s  user  발화 시작: 네.
     2.96s  user  발화 끝
     6.72s  agent 발화 끝
     7.08s  user  발화 시작: 아, 안녕하세요. 혹시 제가 전에 말씀드렸던 휴대폰 요금제 변경에 대해 기억하시나요?
    10.12s  agent 발화 시작: 네.
    10.76s  agent 발화 끝
    12.18s  <ret> 발화 (turn4 첫 프레임)
    12.71s  agent 발화 시작: <ret> 네, 채별님. 한 달에 삼십기가 정도 사용하시고, 번호는 그대로 유지하고 싶다고 말씀하셨죠.
    12.87s  user  발화 끝
    13.20s  ⚡SPAN 주입 [d'=1.02s / d_lead=7.28s]: [2026-05-24] Past chat — Switching phone plans: uses about 30GB of dat
    20.00s  agent 발화 끝
    20.12s  user  발화 시작: 맞아요. 지금 쓰고 있는 요금제가 너무 비싼 것 같아서 다른 요금제를 알아보고 싶어요.
    25.81s  user  발화 끝
