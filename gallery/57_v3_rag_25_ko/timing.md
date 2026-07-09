# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 잭 소크 선수랑 라파엘라 레지 선수 둘 다 무슨 스포츠를 했는지 궁금했어요.
     4.67s  user  발화 끝
     4.74s  agent 발화 시작: 좋은 질문이세요—많은 운동선수들이 종목을 바꿔서 하기도 하잖아요.
     9.10s  <ret> 발화 (turn2 첫 프레임)
     9.41s  agent 발화 시작: <ret> 제가 제대로 기억하고 있다면… 잭 소크 선수랑 라파엘라 레지 선수는 둘 다 프로 테니스 선수예요.
     9.51s  agent 발화 끝
    10.78s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.93s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    16.67s  user  발화 시작: 테니스군요? 소크 선수는 야구도 조금 했었던 것 같기도 한데요.
    16.74s  agent 발화 끝
    20.84s  user  발화 끝
    21.19s  agent 발화 시작: 잭 소크 선수는 테니스에 전념했어요—정말 집중력이 뛰어난 젊은 분이셨어요.
    26.30s  <ret> 발화 (turn5 첫 프레임)
    26.69s  agent 발화 시작: <ret> 확실하다고 생각하지만, 다시 한번 확인해 볼게요… 잭 소크 선수는 프로 야구를 한 적이 없고, 오
    26.85s  agent 발화 끝
    28.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.52s]: Jack Sock has never played professional baseball; he focused solely on
    35.22s  agent 발화 끝
    35.22s  user  발화 시작: 그런데 레지 선수요—그분도 복식에서 높은 랭킹을 기록했었나요?
    39.43s  agent 발화 시작: 음, 그건…
    39.43s  user  발화 끝
    39.84s  user  발화 시작: 그러니까, 복식 랭킹이 단식 랭킹과 비슷했는지 궁금해요.
    40.48s  agent 발화 끝
    43.72s  agent 발화 시작: 아, 정말 날카로운 관찰이시네요.
    43.77s  user  발화 끝
    45.74s  <ret> 발화 (turn10 첫 프레임)
    46.12s  agent 발화 끝
    46.13s  agent 발화 시작: <ret> 그녀의 복식 성적에 대한 정보를 찾아볼게요… 라파엘라 레지 선수는 천구백구십일 년에 복식 랭킹 1
    47.58s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.20s]: Raffaella Reggi achieved a career-high doubles ranking of number seven
    54.80s  agent 발화 끝
    54.98s  user  발화 시작: 17위… 꽤 좋은데요. 그럼 우승 기록은 어때요—둘 다 그랜드 슬램에서 우승한 적이 있나요?
    60.64s  agent 발화 시작: 그랜드 슬램은 최고의 시험대 아니겠어요? 실력을 가늠하는 진짜 척도죠.
    60.72s  user  발화 끝
    65.96s  <ret> 발화 (turn13 첫 프레임)
    66.20s  agent 발화 시작: <ret> 그랜드 슬램 우승 기록에 대해 알아볼게요… 잭 소크 선수와 라파엘라 레지 선수 모두 그랜드 슬램 
    66.32s  agent 발화 끝
    67.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.44s]: Neither Jack Sock nor Raffaella Reggi have won a Grand Slam singles ti
    74.63s  agent 발화 끝
