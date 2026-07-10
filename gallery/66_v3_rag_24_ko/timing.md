# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "보국",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-01-11",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-12",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-07",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 재온 씨. 요즘 진로 때문에 고민이 많아서요. | S2 네, 영화 보는 거 정말 좋아해요! | S3 …그런데 그 영화에서 교장 선생님 이름이 뭐였죠? | S4 아, 버논이었군요. 기억이 안 났어요. 감사합니다.

     0.00s  user  발화 시작: 안녕하세요, 재온 씨. 요즘 진로 때문에 고민이 많아서요.
     3.98s  agent 발화 시작: 안녕하세요. 진로 고민, 당연히 하실 수 있죠. 어떤 점이 가장 걱정되세요?
     4.12s  user  발화 끝
     5.36s  user  발화 시작: 네.
     5.76s  user  발화 끝
     8.89s  agent 발화 끝
     9.49s  user  발화 시작: 음… 제가 뭘 잘하는지, 뭘 하고 싶은지 잘 모르겠어요.
    13.62s  agent 발화 시작: 그런 고민은 흔하게 겪으시는 거 같아요. 혹시 영화를 좋아하시나요?
    13.85s  user  발화 끝
    17.25s  user  발화 시작: 네, 영화 보는 거 정말 좋아해요!
    17.60s  agent 발화 끝
    19.59s  <ret> 발화 (turn6 첫 프레임)
    19.73s  agent 발화 시작: <ret> 영화를 좋아하신다면, '브렉퍼스트 클럽'이라는 영화를 아실 거예요. 존 휴즈 감독이 천구백팔십오년
    19.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.92s]: John Hughes directed "The Breakfast Club", released in 1985, starring 
    19.83s  user  발화 끝
    23.84s  user  발화 시작: 맞아요.
    24.57s  user  발화 끝
    27.57s  agent 발화 시작: 그 영화 속 등장인물들의 이야기를 통해 자신을 돌아보는 것도 좋은 방법일 수 있어요. —
    27.64s  agent 발화 끝
    31.84s  user  발화 시작: …그런데 그 영화에서 교장 선생님 이름이 뭐였죠?
    32.70s  agent 발화 끝
    34.85s  <ret> 발화 (turn10 첫 프레임)
    34.92s  agent 발화 시작: <ret> 아, 교장 선생님이요?
    34.93s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.47s]: Assistant Principal Richard Vernon oversaw Saturday detention in "The 
    35.03s  user  발화 끝
    36.34s  agent 발화 시작: '브렉퍼스트 클럽'에서 학생들을 감독한 조교장은 리처드 버논이었어요. 규칙을 엄격하게 적용하면서도 학생들을 
    36.39s  agent 발화 끝
    44.48s  user  발화 시작: 네네.
    45.12s  user  발화 끝
    46.69s  user  발화 시작: 아, 버논이었군요. 기억이 안 났어요. 감사합니다.
    46.82s  agent 발화 끝
    50.44s  agent 발화 시작: 도움이 되었다니 기쁘네요. 자신을 발견하는 여정은 때론 어렵지만, 분명히 가치 있는 일이에요.
    50.61s  user  발화 끝
    56.69s  agent 발화 끝
