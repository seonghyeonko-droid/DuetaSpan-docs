# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "유아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-08-20",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 심리 상담 같은 것도 해주시는 건가요? | S2 영어 학원이랑 미술 학원 둘 다 다니고 있어요. 둘 다 다니느 | S3 음… 게임을 좀 하긴 하는데, 그것도 잠깐이에요. | S4 남편도 저랑 똑같이 생각해요. 아이를 위해 좋은 건 해주고 싶

     0.00s  agent 발화 시작: 안녕하세요, 유아님. 저는 여러분의 삶을 함께 고민하고 응원하는 비안이라고 해요. 어떤 이야기를 나누고 싶으
     7.23s  user  발화 시작: 혹시 심리 상담 같은 것도 해주시는 건가요?
     7.27s  agent 발화 끝
    10.02s  agent 발화 시작: 네, 유아님. 저는 부모님과 자녀분들 사이의 관계, 그리고 가족 구성원 모두가 행복할 수 있는 시간을 만드는
    10.14s  user  발화 끝
    19.29s  agent 발화 끝
    19.68s  user  발화 시작: 음… 요즘 애들 학원 때문에 너무 힘드네요.
    23.11s  agent 발화 시작: 학원 문제 때문에 힘드시군요. 아이의 학업에 대한 걱정과, 또 부모님으로서 최선을 다하려는 마음이 느껴져요.
    23.24s  user  발화 끝
    32.98s  user  발화 시작: 영어 학원이랑 미술 학원 둘 다 다니고 있어요. 둘 다 다니느라 너무 바쁘고, 아이도 지쳐 보여서…
    33.21s  agent 발화 끝
    39.89s  agent 발화 시작: 아이가 두 학원을 다니면서 많이 지쳐 보인다고 말씀해주셨네요. 아이의 스케줄이 너무 빡빡한 것 같아 걱정이 
    40.11s  user  발화 끝
    43.74s  user  발화 시작: 네.
    44.23s  user  발화 끝
    51.08s  agent 발화 시작: 아이가 학원을 마치고 돌아온 후의 시간을 여쭤봤는데, 아이가 어떤 활동을 하는지, 또 아이가 그 시간을 어떻
    51.16s  agent 발화 끝
    57.64s  user  발화 시작: 음.
    58.19s  user  발화 끝
    66.59s  user  발화 시작: 음… 게임을 좀 하긴 하는데, 그것도 잠깐이에요.
    66.70s  agent 발화 끝
    70.10s  user  발화 끝
    70.35s  agent 발화 시작: 게임을 잠깐 하는 정도라고 하셨네요. 아이가 스스로 좋아하는 활동을 찾아서 즐기는 시간이 부족한 것 같아 안
    81.62s  user  발화 시작: 생각해봤는데… 시간이 없어서 잘 안 돼요. 저도 회사 일 때문에 너무 바쁘거든요.
    81.72s  agent 발화 끝
    86.95s  agent 발화 시작: 회사 일도 바쁘신데 아이까지 챙기려니 정말 힘드시겠어요. 부모님으로서 느끼는 책임감과 부담감이 크신 것 같아
    87.13s  user  발화 끝
    98.55s  agent 발화 끝
    99.02s  user  발화 시작: 남편도 저랑 똑같이 생각해요. 아이를 위해 좋은 건 해주고 싶은데, 어떻게 해야 할지 모르겠어요.
   105.31s  user  발화 끝
   105.52s  agent 발화 시작: 아이를 위해 좋은 것을 해주고 싶지만, 어떻게 해야 할지 몰라 답답하시군요. 아이의 행복을 바라는 마음은 당
   119.25s  agent 발화 끝
