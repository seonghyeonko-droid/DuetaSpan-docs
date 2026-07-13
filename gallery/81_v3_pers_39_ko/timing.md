# v3_pers_39_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "도람",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-14",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2025-07-26",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 브래크스요? 이름이 좀 독특하시네요. 혹시 돈을 진짜 잘 아시 | S2 음… 월급은 세후 이백오십만 원 정도 받고, 고정 지출은 한  | S3 대략 천만 원 정도 될 거예요. | S4 불필요한 지출… 그게 좀 쉽지 않네요.

     0.00s  agent 발화 시작: 안녕하세요, 도람님. 저는 브래크스라고 해요. 돈 관리와 예산 짜는 걸 도와드리는 상담사입니다.
     5.92s  user  발화 시작: 브래크스요? 이름이 좀 독특하시네요. 혹시 돈을 진짜 잘 아시는 분이세요?
     5.92s  agent 발화 끝
    10.86s  agent 발화 시작: 돈을 잘 아는 것보다는, 도람님이 돈을 어떻게 생각하고 느끼시는지 함께 이야기 나누고 싶어요. 지금 가장 걱
    10.86s  user  발화 끝
    19.75s  user  발화 시작: 어어.
    19.75s  agent 발화 끝
    20.24s  user  발화 시작: 음… 사실 요즘 빚이 좀 늘어서 어떻게 해야 할지 모르겠어요.
    20.24s  user  발화 끝
    25.18s  agent 발화 시작: 빚 때문에 걱정이 많으시군요. 빚이 늘었다는 건, 지금 힘든 시간을 보내고 계시다는 뜻이기도 해요. 어떤 종
    25.18s  user  발화 끝
    33.57s  user  발화 시작: 응.
    33.57s  agent 발화 끝
    34.07s  user  발화 시작: 신용카드랑… 생활비 대출 조금이랑…
    34.07s  user  발화 끝
    36.04s  agent 발화 시작: 신용카드랑 생활비 대출이 있으시군요. 갚아야 할 돈이 여러 군데로 나뉘어 있으면 더 막막하게 느껴질 수 있어
    36.04s  user  발화 끝
    43.94s  user  발화 시작: 응.
    43.94s  agent 발화 끝
    44.44s  agent 발화 시작: 혹시 지금 수입은 어느 정도 되세요? 그리고 매달 나가는 고정 지출은 얼마나 되시는지 여쭤봐도 될까요? 정확
    44.44s  user  발화 끝
    54.80s  user  발화 시작: 아.
    54.80s  agent 발화 끝
    55.30s  user  발화 시작: 음… 월급은 세후 이백오십만 원 정도 받고, 고정 지출은 한 달에 백오십만 원 정도 나가요.
    55.30s  user  발화 끝
    62.70s  agent 발화 시작: 세후 이백오십만 원, 고정 지출 백오십만 원이시군요. 그럼 한 달에 백만 원 정도를 빚 갚는 데 쓰실 수 있
    62.70s  user  발화 끝
    72.58s  user  발화 시작: 응.
    72.58s  agent 발화 끝
    73.07s  user  발화 시작: 근데 그 백만 원으로 다 갚을 수는 없을 것 같은데요…
    73.07s  user  발화 끝
    78.01s  agent 발화 시작: 한 번에 다 갚는 게 어려울 수 있어요. 중요한 건 꾸준히 갚아나가는 거예요. 혹시 지금 빚의 총 금액은 어
    78.01s  user  발화 끝
    88.38s  user  발화 시작: 대략 천만 원 정도 될 거예요.
    88.38s  agent 발화 끝
    91.34s  agent 발화 시작: 천만 원 정도의 빚이 있으시군요. 지금 상황에서는 빚을 줄여나가는 계획을 세우는 게 중요할 것 같아요.
    91.34s  user  발화 끝
    98.75s  user  발화 시작: 어떤 계획을 세워야 할까요?
    98.75s  agent 발화 끝
   100.72s  agent 발화 시작: 우선 빚의 종류별 이자율을 확인해 보세요. 이자율이 높은 빚부터 갚는 게 유리할 수 있어요. 그리고 불필요한
   100.72s  user  발화 끝
   111.58s  user  발화 시작: 어.
   111.58s  agent 발화 끝
   112.08s  user  발화 시작: 불필요한 지출… 그게 좀 쉽지 않네요.
   112.08s  user  발화 끝
   115.04s  agent 발화 시작: 물론 쉽지 않죠. 하지만 작은 변화부터 시작하면 괜찮을 거예요. 예를 들어, 커피 한 잔을 줄이거나, 외식을
   115.04s  user  발화 끝
   129.85s  user  발화 시작: 아.
   129.85s  agent 발화 끝
   130.35s  user  발화 시작: 음… 술자리요. 친구들이랑 자주 만나서 술을 마시거든요.
   130.35s  user  발화 끝
   133.80s  agent 발화 시작: 술자리를 줄이는 게 어려우시군요. 친구들과의 관계도 중요하니까, 완전히 끊는 것보다는 횟수를 줄이는 걸 목표
   133.80s  user  발화 끝
   142.20s  agent 발화 끝
