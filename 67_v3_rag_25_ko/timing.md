# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Morgan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-03",
#       "category": "home",
#       "text": "User's home address is 461 Cedar Lane."
#     },
#     {
#       "date": "2026-06-25",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2026-06-11",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 잭 소크랑 라파엘라 레지 선수, 혹시 같이 하는 스포츠가 뭐였 | S2 와, US 오픈에서 우승했다니 대단하네요. 그런데 그 우승이  | S3 아직도 활동하고 있다니 멋지네요. 혹시 레지 선수는 주로 어떤 | S4 그렇군요. 그럼 잭 소크 선수도 다른 파트너와 우승한 적이 있

     0.00s  user  발화 시작: 잭 소크랑 라파엘라 레지 선수, 혹시 같이 하는 스포츠가 뭐였죠?
     6.39s  user  발화 끝
     6.67s  agent 발화 시작: 음, 두 분이 함께 했던 스포츠에 대해 알아볼까요?
     9.48s  <ret> 발화 (turn2 첫 프레임)
     9.87s  agent 발화 시작: <ret> 두 분은 테니스 경기를 함께 했습니다. 잭 소크 선수와 라파엘라 레지 선수는 테니스 선수였습니다.
     9.95s  agent 발화 끝
    10.68s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.20s]: Jack Sock and Raffaella Reggi both competed in tennis.
    14.00s  user  발화 시작: 음.
    14.59s  user  발화 끝
    17.31s  user  발화 시작: 테니스요? 음… 저는 그 두 분이 테니스를 쳤다는 걸 처음 알았네요. 혹시 다른 경기에도 같이 나간 적이 있
    17.33s  agent 발화 끝
    26.71s  agent 발화 시작: [curious] 다른 경기 출전 여부에 대해서도 찾아볼 수 있습니다.
    26.76s  user  발화 끝
    29.83s  <ret> 발화 (turn6 첫 프레임)
    29.98s  agent 발화 시작: <ret> 두 분은 혼합 복식 테니스에서 파트너였습니다. 잭 소크 선수와 라파엘라 레지 선수는 혼합 복식 테
    30.09s  agent 발화 끝
    31.03s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.08s]: Jack Sock and Raffaella Reggi partnered in mixed doubles tennis.
    39.21s  agent 발화 끝
    40.04s  user  발화 시작: 아, 혼합 복식이군요. 그럼 혹시 우승한 적이라도 있나요?
    44.86s  agent 발화 시작: 우승 기록이 있는지 확인해 보겠습니다.
    45.00s  user  발화 끝
    46.97s  <ret> 발화 (turn9 첫 프레임)
    47.36s  agent 발화 시작: <ret> 잭 소크와 라파엘라 레지는 US 오픈 혼합 복식에서 우승했습니다. 잭 소크 선수와 라파엘라 레지 
    47.45s  agent 발화 끝
    48.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.85s]: Jack Sock and Raffaella Reggi won the US Open mixed doubles title.
    58.59s  user  발화 시작: 와, US 오픈에서 우승했다니 대단하네요. 그런데 그 우승이 언제였죠?
    58.67s  agent 발화 끝
    64.04s  agent 발화 시작: 우승 연도를 알아봐 드릴게요.
    64.09s  user  발화 끝
    65.87s  <ret> 발화 (turn12 첫 프레임)
    66.02s  agent 발화 끝
    66.02s  agent 발화 시작: <ret> 두 분은 2018년에 US 오픈 혼합 복식에서 우승했습니다. 잭 소크 선수와 라파엘라 레지 선수는
    67.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: Jack Sock and Raffaella Reggi won the US Open mixed doubles title in 2
    75.51s  user  발화 시작: 진짜요?
    76.47s  user  발화 끝
    78.17s  agent 발화 끝
    78.78s  user  발화 시작: 2018년이군요. 잭 소크 선수는 지금도 테니스를 치나요?
    84.11s  user  발화 끝
    84.47s  agent 발화 시작: 잭 소크 선수의 현재 활동에 대해 알아볼까요?
    87.46s  <ret> 발화 (turn16 첫 프레임)
    87.69s  agent 발화 시작: <ret> 잭 소크 선수는 현재 은퇴했습니다. 잭 소크 선수는 2023년에 프로 테니스 선수로서 은퇴했습니다
    87.80s  agent 발화 끝
    88.82s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.12s]: Jack Sock announced his retirement from professional tennis in 2023.
    95.79s  user  발화 시작: 아, 은퇴했군요. 그럼 라파엘라 레지 선수는 아직 선수로 활동하고 있나요?
    95.80s  agent 발화 끝
   101.43s  user  발화 끝
   101.75s  agent 발화 시작: 라파엘라 레지 선수의 활동 상황을 확인해 보겠습니다.
   105.20s  <ret> 발화 (turn19 첫 프레임)
   105.51s  agent 발화 시작: <ret> 라파엘라 레지 선수는 2024년 5월 현재도 활동 중입니다. 라파엘라 레지 선수는 2024년 5월
   105.68s  agent 발화 끝
   106.40s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.49s]: As of May 2024, Raffaella Reggi continues to compete professionally.
   112.26s  user  발화 시작: 그렇군요.
   113.17s  user  발화 끝
   115.62s  agent 발화 끝
   116.71s  user  발화 시작: 아직도 활동하고 있다니 멋지네요. 혹시 레지 선수는 주로 어떤 스타일의 경기를 하는 편인가요?
   124.00s  agent 발화 시작: 라파엘라 레지 선수의 경기 스타일에 대해 자세히 알아볼까요?
   124.08s  user  발화 끝
   127.97s  <ret> 발화 (turn23 첫 프레임)
   128.36s  agent 발화 시작: <ret> 라파엘라 레지 선수는 주로 더블 경기에서 강점을 보입니다. 라파엘라 레지 선수는 더블 경기에서 뛰
   128.44s  agent 발화 끝
   129.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.58s]: Raffaella Reggi is primarily known for her success in doubles tennis.
   134.89s  user  발화 시작: 음.
   135.48s  user  발화 끝
   138.09s  agent 발화 끝
   138.18s  user  발화 시작: 더블이군요. 그럼 잭 소크 선수도 더블을 주로 했나요?
   142.20s  user  발화 끝
   142.26s  agent 발화 시작: 잭 소크 선수의 경기 스타일도 확인해 보겠습니다.
   145.31s  <ret> 발화 (turn27 첫 프레임)
   145.54s  agent 발화 시작: <ret> 잭 소크 선수도 싱글과 더블 모두에서 활약했습니다. 잭 소크 선수는 싱글과 더블 경기 모두에서 뛰
   145.73s  agent 발화 끝
   147.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.63s]: Jack Sock competed in both singles and doubles throughout his career.
   154.35s  agent 발화 끝
   154.50s  user  발화 시작: 그렇군요. 두 분의 조합은 정말 대단했던 것 같아요. 혹시 다른 파트너와도 우승한 적이 있나요?
   162.62s  agent 발화 시작: 다른 파트너와의 우승 기록을 찾아볼까요?
   162.79s  user  발화 끝
   164.73s  <ret> 발화 (turn30 첫 프레임)
   165.11s  agent 발화 시작: <ret> 라파엘라 레지 선수는 다양한 파트너와 함께 우승 경험이 있습니다. 라파엘라 레지 선수는 여러 파트
   165.21s  agent 발화 끝
   166.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.52s]: Raffaella Reggi has won titles with multiple different partners.
   174.66s  agent 발화 끝
   175.23s  user  발화 시작: 그렇군요. 그럼 잭 소크 선수도 다른 파트너와 우승한 적이 있을까요?
   180.79s  user  발화 끝
   180.80s  agent 발화 시작: 잭 소크 선수의 다른 파트너와의 우승 기록을 확인해 보겠습니다.
   184.70s  <ret> 발화 (turn33 첫 프레임)
   184.93s  agent 발화 시작: <ret> 잭 소크 선수는 코코 가우프 선수와 함께 우승한 적이 있습니다. 잭 소크 선수는 코코 가우프 선수
   184.96s  agent 발화 끝
   186.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.42s]: Jack Sock won a title with Coco Gauff as his partner.
   194.21s  agent 발화 끝
   194.23s  user  발화 시작: 코코 가우프 선수와도 함께 했다니, 정말 다양한 선수들과 파트너십을 맺었군요.
   200.60s  agent 발화 시작: 네, 두 분 모두 다양한 선수들과 좋은 파트너십을 보여주었습니다.
   200.81s  user  발화 끝
   202.02s  user  발화 시작: 네.
   202.65s  user  발화 끝
   204.77s  agent 발화 시작: 혹시 더 궁금한 점이 있으신가요?
   204.99s  agent 발화 끝
   206.85s  agent 발화 끝
   206.97s  user  발화 시작: 음… 지금은 괜찮아요. 정말 감사합니다.
   210.67s  user  발화 끝
   210.68s  agent 발화 시작: 도움이 되었다니 기쁩니다. 언제든지 필요하시면 다시 찾아주세요.
   215.68s  agent 발화 끝
