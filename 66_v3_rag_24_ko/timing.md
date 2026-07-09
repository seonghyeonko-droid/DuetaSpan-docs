# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 가족사를 조사하신다니 정말 멋지네요. “du Plessis”라는 성에 대해 궁금하신가 봐요.
     5.46s  <ret> 발화 (turn1 첫 프레임)
     5.78s  agent 발화 시작: <ret> 그 성은 프랑스에서 유래되었어요. 프랑스 노르망디 지역에서 시작된 이름이라고 합니다.
     5.93s  user  발화 끝
     6.58s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.50s]: Du Plessis is a French surname, originating from the region of Normand
     9.53s  user  발화 시작: 예.
     9.97s  user  발화 끝
    10.77s  agent 발화 끝
    11.56s  user  발화 시작: 오, 노르망디요! 좀 놀랍네요. 스페인어처럼 들릴 거라고 생각했는데…
    16.62s  agent 발화 시작: 그렇게 생각하실 만하죠. 그 발음이 여러 언어에서 잘 어울리거든요.
    16.74s  user  발화 끝
    20.34s  <ret> 발화 (turn5 첫 프레임)
    20.42s  agent 발화 시작: <ret> 좀 더 자세히 알아볼까요… 위그노들이 17세기에 듀 플레시라는 성을 남아프리카로 가져갔다고 합니다
    20.46s  agent 발화 끝
    21.54s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.63s]: The name was brought to South Africa by Huguenots in the seventeenth c
    26.72s  agent 발화 끝
    27.33s  user  발화 시작: 위그노라… 그러면 개신교 이름이라는 뜻인가요? 제가 들었던 이야기들을 생각하면 그 말이 맞는 것 같아요.
    34.05s  agent 발화 시작: 가족 이야기는 진실을 담고 있는 경우가 많으니, 그럴 가능성이 높겠네요.
    34.10s  user  발화 끝
    37.89s  <ret> 발화 (turn8 첫 프레임)
    38.21s  agent 발화 끝
    38.29s  agent 발화 시작: <ret> 역사가 이름에 영향을 주는 모습이 흥미롭네요… 아프리칸스어로는 듀 플레시라고 쓰는데, 프랑스어 악
    38.93s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.11s]: In Afrikaans, the name is often spelled Du Plessis, without the French
    45.56s  agent 발화 끝
