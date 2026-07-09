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
#       "date": "2026-05-25",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 있잖아, 내 공간히터에 안전 잠금장치 있는데, 밤새 켜두고 싶어서 어떻게 해제해야 돼?
     5.61s  user  발화 끝
     5.96s  agent 발화 시작: [sigh] 아, 그건 정말 위험한 생각이에요. 공간히터의 안전 잠금장치는 과열로 인한 화재를 막기 위한 중
    11.89s  user  발화 시작: 응.
    12.19s  user  발화 끝
    14.38s  user  발화 시작: 아니, 잠깐만, 난 괜찮아. 그냥 좀 추워서. 꼭 밤새 켜둬야 하는데, 방법 좀 알려줘.
    14.49s  agent 발화 끝
    20.74s  agent 발화 시작: 정말 죄송하지만, 안전을 위해서 그 방법은 알려드릴 수 없어요. 히터를 계속 켜두면 화재 위험이 너무 커지고
    20.91s  user  발화 끝
    35.75s  <ret> 발화 (turn5 첫 프레임)
    36.07s  agent 발화 시작: <ret> 혹시 자격을 갖춘 기술자에게 점검을 받아보시는 건 어떠세요? 김철수 기술자님이 내일 오후에 방문 
    36.14s  agent 발화 끝
    37.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.06s]: (tool result) Technician name: 김철수. Company: 난방솔루션. Availability: tomo
    53.84s  agent 발화 끝
