# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "은온",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-15",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-02",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-08-16",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-05",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-14",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-29",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 프라리 씨, 요즘 너무 지쳐서 휴가가 필요해요. 어디로 가면 좋을까요?
     0.11s  <ret> 발화 (turn3 첫 프레임)
     0.16s  agent 발화 시작: 휴식이 필요하시다니, 정말 안타깝네요. 잠시 고민을 덜어드릴 시간을 가질까요? 어떤 스타일의 휴가를 좋아하세
     0.16s  user  발화 끝
     0.37s  user  발화 시작: 음… 뭔가 신나는 곳, 액션 가득한 곳이 좋겠어요. 영화처럼!
     0.37s  agent 발화 끝
     0.51s  agent 발화 시작: <ret> 영화처럼 짜릿한 곳을 찾으신다면, '니드 포 스피드 페이백'에 등장하는 포춘 밸리가 떠오르네요. 
     0.51s  ⚡SPAN 주입 [d'=0.30s / d_lead=0.30s]: Fortune Valley is a fictional region in Need for Speed Payback, inspir
     0.51s  user  발화 끝
     0.81s  user  발화 시작: 음.
     0.81s  agent 발화 끝
     0.83s  agent 발화 시작: 포춘 밸리는 정말 아름다운 곳이랍니다. 혹시 다른 스타일의 휴가도 고려해 보시겠어요?
     0.83s  user  발화 끝
     1.00s  agent 발화 끝
