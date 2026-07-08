# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 듀 플레시라는 이름이 궁금했는데, 프랑스 이름처럼 들리지 않나요?
     3.67s  agent 발화 시작: 확실히 유럽풍의 느낌이 드는 이름이네요. 그런데 그 이름의 기원은 꽤 흥미로운 이야기를 가지고 있고, 특정 
     3.84s  user  발화 끝
    11.74s  agent 발화 끝
    12.10s  user  발화 시작: 오, 그럼 어디에서 온 이름인가요?
    13.79s  <ret> 발화 (turn3 첫 프레임)
    13.86s  agent 발화 시작: <ret> 그 성의 어원을 알아볼까요— 듀 플레시라는 이름은 프랑스 노르망디에서 유래했고, “울타리 안의 땅
    14.03s  user  발화 끝
    15.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.59s]: Du Plessis is a French surname originating in Normandy, from the Old F
    22.07s  agent 발화 끝
    22.96s  user  발화 시작: 노르망디라고요. 그럼 확실히 프랑스 이름이네요?
    25.68s  user  발화 끝
    25.92s  agent 발화 시작: 뿌리는 프랑스에 있지만, 그 이름이 퍼져나간 모습은 꽤 흥미롭고, 특히 다른 지역에서 어떻게 받아들여졌는지 
    34.45s  agent 발화 끝
    34.50s  user  발화 시작: 어디로 퍼져나갔는데요? 주로 프랑스에만 있었나요?
    37.35s  <ret> 발화 (turn7 첫 프레임)
    37.75s  agent 발화 시작: <ret> 그 성의 역사는 프랑스를 넘어선 곳까지 이어집니다— 듀 플레시 가문은 17세기에 노르망디에서 남아
    37.91s  user  발화 끝
    38.95s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.04s]: The Du Plessis family emigrated from Normandy to South Africa in the s
    44.84s  agent 발화 끝
    44.94s  user  발화 시작: 남아프리카요? 생각보다 뜻밖인데요.
    47.38s  user  발화 끝
    47.81s  agent 발화 시작: 맞습니다. 그곳에서 초기 네덜란드와 위그노 정착민들 사이에서 꽤 흔한 성씨가 되었습니다.
    53.91s  user  발화 시작: 위그노들은 프랑스를 떠나온 개신교도들이었죠?
    53.92s  agent 발화 끝
    56.82s  <ret> 발화 (turn11 첫 프레임)
    56.89s  agent 발화 시작: <ret> 그 종교 난민들이 중요한 역할을 했습니다— 위그노들은 프랑스에서 박해를 피해 네덜란드나 남아프리카
    57.14s  user  발화 끝
    58.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.04s]: Huguenots, French Protestants persecuted in the sixteenth and seventee
    60.14s  user  발화 시작: 예.
    60.58s  user  발화 끝
    64.40s  agent 발화 끝
    64.45s  agent 발화 시작: 남아프리카에 정착하면서 그 이름은 변화하고 다양한 형태로 발전하기도 했습니다.
    69.24s  user  발화 시작: 변화요? 어떻게 달라졌나요?
    69.45s  agent 발화 끝
    71.46s  <ret> 발화 (turn15 첫 프레임)
    71.53s  agent 발화 시작: <ret> 그 성씨는 정착하면서 변화했습니다— 아프리칸스어에서는 발음 때문에 Duplessis라고 쓰기도 합
    71.64s  user  발화 끝
    73.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.06s]: In Afrikaans, Du Plessis is often spelled Duplessis, a phonetic adapta
    78.29s  agent 발화 끝
    78.38s  user  발화 시작: Duplessis… 그래서 가끔 철자가 조금 다르게 보이는군요. 아, 그러니까 남아프리카에서는 그 철자가 흔
    86.49s  user  발화 끝
    86.69s  agent 발화 시작: 꼭 흔하다고 할 수는 없지만, 남아프리카의 언어 환경을 반영한 인지도가 있는 변형입니다.
    92.11s  agent 발화 끝
    92.25s  user  발화 시작: 혹시 왕족과의 연관성이나 유명한 듀 플레시 가문 구성원은 없나요?
    96.05s  <ret> 발화 (turn19 첫 프레임)
    96.37s  agent 발화 시작: <ret> 몇몇 구성원들은 상당한 명성을 얻었습니다— 빌럼 아드리안 반 데르 스텔 듀 플레시는 1800년대 
    96.50s  user  발화 끝
    97.89s  ⚡SPAN 주입 [d'=1.84s / d_lead=2.89s]: Willem Adriaan van der Stel Du Plessis was a prominent South African p
   105.04s  agent 발화 끝
   105.31s  user  발화 시작: 정치인이군요. 흥미롭네요. 혹시 그들의 문장(coat of arms)에 대해서는 아시나요?
   110.79s  agent 발화 시작: 그 이름과 관련된 문장은 꽤 자세하고, 오랜 역사와 혈통을 반영하고 있습니다.
   110.97s  user  발화 끝
   116.34s  agent 발화 끝
