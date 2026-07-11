# v3_pers_38_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "도별",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-14",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-07-10",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-27",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 도별님, 안녕하세요. 저는 히오로입니다. 혹시 지금 어떤 고민 때문에 저를 찾아주셨는지 여쭤봐도 될까요?
     0.12s  user  발화 시작: 네.
     0.12s  agent 발화 끝
     0.13s  user  발화 시작: 혹시 제가 뭘 어떻게 해야 할지 알려주시는 분이신가요?
     0.13s  user  발화 끝
     0.20s  agent 발화 시작: 네, 도별님. 제가 도별님의 상황을 잘 들어드리고, 함께 고민하면서 앞으로 나아갈 방향을 찾는 것을 도와드릴
     0.20s  user  발화 끝
     0.35s  user  발화 시작: 예.
     0.35s  agent 발화 끝
     0.36s  agent 발화 시작: 혹시 최근에 직장에서 특별히 힘든 일이 있으셨는지, 아니면 전반적인 커리어에 대한 고민이신가요? 어떤 이야기
     0.36s  user  발화 끝
     0.51s  user  발화 시작: 네.
     0.51s  agent 발화 끝
     0.52s  user  발화 시작: 음… 사실 요즘 회사에서 자꾸 새로운 업무만 던져주고, 제가 뭘 잘하는지, 뭘 하고 싶은지 모르겠어요.
     0.52s  user  발화 끝
     0.65s  agent 발화 시작: 새로운 업무가 계속 주어진다는 건 도별님의 능력을 인정받고 있다는 뜻이기도 하지만, 동시에 혼란스러울 수 있
     0.65s  user  발화 끝
     0.86s  user  발화 시작: 네네.
     0.86s  agent 발화 끝
     0.87s  user  발화 시작: 네, 완전히 달라요. 제가 원래는 디자인 쪽이었는데, 요즘은 마케팅 업무도 해야 하고… 정말 혼란스럽습니다.
     0.87s  user  발화 끝
     1.00s  user  발화 끝
